create database motianlun;
use motianlun;
CREATE TABLE `user` (
  `userId` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `uname` varchar(128) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(256) NOT NULL DEFAULT '' COMMENT '密码',
  `regTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=351 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';



CREATE TABLE `product` (
  `productId` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `productName` varchar(128) NOT NULL DEFAULT '' COMMENT '商品名',
  `type` int(1) NOT NULL DEFAULT '0' COMMENT '商品类型：0-演唱会，1-电影票，2-展览',
  `price` decimal(10,4) NOT NULL DEFAULT '0.0000' COMMENT '价格',
  `province` varchar(32) NOT NULL DEFAULT '' COMMENT '商品所在省份',
  `city` varchar(32) NOT NULL DEFAULT '' COMMENT '商品所在城市',
  `area` varchar(32) NOT NULL DEFAULT '' COMMENT '商品所在区域',
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '商品创建时间',
  `lastModifyTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=351 DEFAULT CHARSET=utf8mb4 COMMENT='商品表';



CREATE TABLE `order` (
  `orderId` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `userId` bigint(20) NOT NULL DEFAULT '0' COMMENT '用户id',
  `productId` bigint(20) NOT NULL DEFAULT '0' COMMENT '商品id',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '订单状态：0-未支付，1-已支付待取票，2-已支付已取票',
  `ticketCode` varchar(32) NOT NULL DEFAULT '0' COMMENT '取票码',
  `amount` decimal(10,4) NOT NULL DEFAULT '0.0000' COMMENT '实际支付金额',
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '订单创建时间',
  `lastModifyTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=351 DEFAULT CHARSET=utf8mb4 COMMENT='订单表';
