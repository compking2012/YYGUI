echo off
cls
set /p proj=���еĳ�����(clock/tests/compass):
echo "���ĳ��������ǣ� "%proj%
echo ��װrun.sh�ű����豸��...
adb push %cd%/.script/run.sh /system/bin/run.sh
adb shell chmod 777 /system/bin/run.sh

echo ��װĿ������豸��...
adb push %cd%/%proj% /system/app/%proj%

copy %cd%\%proj%\index.js %cd%\%proj%\index.js.bak
echo setInterval(function(){}, 10000000); >> %cd%/%proj%/index.js.bak
adb push %cd%/%proj%/index.js.bak /system/app/%proj%/index.js

echo ��ʼ��������... %proj%
adb shell run.sh %proj%
pause