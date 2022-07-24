-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-07-24 16:13:17
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `final_project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `activity`
--

CREATE TABLE `activity` (
  `ActivityId` varchar(20) NOT NULL,
  `ActivityName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `activity`
--

INSERT INTO `activity` (`ActivityId`, `ActivityName`) VALUES
('business', '商業投資'),
('consult', '命理諮商'),
('fashion', '美容時尚'),
('food', '美食美酒'),
('game', '遊戲卡牌'),
('learning', '體驗學習'),
('movie', '影音展演'),
('other', '其他'),
('travel', '旅行出遊'),
('workout', '運動健身');

-- --------------------------------------------------------

--
-- 資料表結構 `city`
--

CREATE TABLE `city` (
  `CityId` varchar(20) NOT NULL,
  `CityName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `city`
--

INSERT INTO `city` (`CityId`, `CityName`) VALUES
('CHW', '彰化縣'),
('CYC', '嘉義縣'),
('CYI', '嘉義市'),
('HSC', '新竹市'),
('HSZ', '新竹縣'),
('HUN', '花蓮縣'),
('ILA', '宜蘭縣'),
('KHH', '高雄市'),
('KLU', '基隆市'),
('KNH', '金門縣'),
('LNN', '連江縣'),
('NPE', '新北市'),
('NTC', '南投縣'),
('PEH', '澎湖縣'),
('PIF', '屏東縣'),
('TNN', '臺南市'),
('TPE', '臺北市'),
('TTT', '臺東縣'),
('TXG', '臺中市'),
('TYC', '桃園市'),
('YUN', '雲林縣'),
('ZMI', '苗栗縣');

-- --------------------------------------------------------

--
-- 資料表結構 `favorite_activity`
--

CREATE TABLE `favorite_activity` (
  `MemId` int(10) NOT NULL,
  `ActivityName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `find_gender`
--

CREATE TABLE `find_gender` (
  `MemId` int(10) NOT NULL,
  `Gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `find_purpose`
--

CREATE TABLE `find_purpose` (
  `MemId` int(10) NOT NULL,
  `Detail` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `gender`
--

CREATE TABLE `gender` (
  `GenderId` varchar(10) NOT NULL,
  `Gender` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `gender`
--

INSERT INTO `gender` (`GenderId`, `Gender`) VALUES
('F', '女性'),
('M', '男性');

-- --------------------------------------------------------

--
-- 資料表結構 `job`
--

CREATE TABLE `job` (
  `JobID` varchar(20) NOT NULL,
  `JobName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `job`
--

INSERT INTO `job` (`JobID`, `JobName`) VALUES
('catering', '餐旅業'),
('insurance', '金融保險業'),
('manufacturing', '製造業'),
('medical', '醫療保健/醫學研究'),
('origin', '農林漁牧業'),
('other', '其他'),
('public', '公共事業'),
('religion', '宗教'),
('software', '軟體業'),
('student', '學生'),
('traffic', '交通運輸業');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `MemID` int(10) NOT NULL,
  `Pwd` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `NickName` varchar(30) NOT NULL,
  `Permission` enum('A','M') NOT NULL DEFAULT 'A',
  `Birthday` date NOT NULL,
  `CityId` varchar(30) NOT NULL,
  `Gender` enum('F','M') NOT NULL,
  `Job` varchar(30) NOT NULL,
  `Interest` varchar(100) DEFAULT NULL,
  `FindPurpose` varchar(100) DEFAULT NULL,
  `FindGender` varchar(100) DEFAULT NULL,
  `FavoriteActivity` varchar(100) DEFAULT NULL,
  `Introduction` varchar(300) DEFAULT NULL,
  `JoinDate` datetime NOT NULL DEFAULT current_timestamp(),
  `Avatar` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `purpose`
--

CREATE TABLE `purpose` (
  `PurposeId` varchar(30) NOT NULL,
  `Detail` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `purpose`
--

INSERT INTO `purpose` (`PurposeId`, `Detail`) VALUES
('friend', '同好/朋友'),
('need', '各取所需'),
('other', '其他'),
('soulMate', '找尋另一半');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`ActivityId`);

--
-- 資料表索引 `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`CityId`);

--
-- 資料表索引 `favorite_activity`
--
ALTER TABLE `favorite_activity`
  ADD PRIMARY KEY (`MemId`,`ActivityName`),
  ADD KEY `FK_ActivityName` (`ActivityName`);

--
-- 資料表索引 `find_gender`
--
ALTER TABLE `find_gender`
  ADD PRIMARY KEY (`MemId`,`Gender`),
  ADD KEY `Gender` (`Gender`);

--
-- 資料表索引 `find_purpose`
--
ALTER TABLE `find_purpose`
  ADD PRIMARY KEY (`MemId`,`Detail`),
  ADD KEY `Detail` (`Detail`);

--
-- 資料表索引 `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`GenderId`);

--
-- 資料表索引 `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`JobID`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`MemID`),
  ADD KEY `FK_Job` (`Job`),
  ADD KEY `FK_cityId` (`CityId`);

--
-- 資料表索引 `purpose`
--
ALTER TABLE `purpose`
  ADD PRIMARY KEY (`PurposeId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `MemID` int(10) NOT NULL AUTO_INCREMENT;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `find_gender`
--
ALTER TABLE `find_gender`
  ADD CONSTRAINT `find_gender_ibfk_1` FOREIGN KEY (`Gender`) REFERENCES `gender` (`GenderId`);

--
-- 資料表的限制式 `find_purpose`
--
ALTER TABLE `find_purpose`
  ADD CONSTRAINT `find_purpose_ibfk_1` FOREIGN KEY (`Detail`) REFERENCES `purpose` (`PurposeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
