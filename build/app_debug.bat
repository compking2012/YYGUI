echo off
cls
set /p proj=���еĳ�����(clock/tests/compass):
echo "���ĳ����� "%proj%
echo ��װ���нű����豸...
adb push %cd%/.script/run-debug.sh /system/bin/run-debug.sh
adb shell chmod 777 /system/bin/run-debug.sh
echo ""
echo ���³����豸...
adb push %cd%/%proj% /system/app/%proj%

for /f %%i in ('adb shell ls /system/app/node-inspector/ni-stp-ok') do set NI_STP_OK=%%i
echo %NI_STP_OK%

if %NI_STP_OK% == /system/app/node-inspector/ni-stp-ok (
  echo ���Ѿ���װ��node-inspectorƽ̨����������...
  sleep 2
) else (
  echo ���ǵ�һ����������װnode-inspector�Ƚ����������ĵȴ�
  sleep 5
  adb push %cd%/../toolchain/node-inspector /system/app/node-inspector >./.script/ni-stp-log
  echo "[Setup node-inspector Finished]" >./.script/ni-stp-ok
  adb push %cd%/.script/ni-stp-ok /system/app/node-inspector/ni-stp-ok
  echo ��װ�ɹ���
  sleep 3
)

adb forward tcp:8081 tcp:8080
echo ��ʼ����... %proj%
echo ��� Chrome ���������
echo http://127.0.0.1:8081/debug?port=5858
adb shell run-debug.sh %proj%
cmd