# ZuoNewRN
基于React Native 0.71 版本的开发。


# 环境问题
1 ruby 环境不匹配。
2 使用 rvm 不要使用 。


# 解决办法
1 解决 React Native 安装环境的问题:
https://www.jianshu.com/p/190d2ad554a9


2 解决cocoapod的问题:
https://stackoverflow.com/questions/74270210/couldnt-initiate-a-new-react-native-app-because-ios-environment-is-not-properly

gem uninstall cocoapods
sudo xcodebuild -license accept

npx react-native init tempProject --skip-install
cd tempProject
yarn install
cd ios
bundle install
bundle exec pod install
