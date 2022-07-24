-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-07-24 16:04:26
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
-- 資料表結構 `find_purpose`
--

CREATE TABLE `find_purpose` (
  `MemId` int(10) NOT NULL,
  `Detail` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `find_purpose`
--
ALTER TABLE `find_purpose`
  ADD PRIMARY KEY (`MemId`,`Detail`),
  ADD KEY `Detail` (`Detail`);

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `find_purpose`
--
ALTER TABLE `find_purpose`
  ADD CONSTRAINT `find_purpose_ibfk_1` FOREIGN KEY (`Detail`) REFERENCES `purpose` (`PurposeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
