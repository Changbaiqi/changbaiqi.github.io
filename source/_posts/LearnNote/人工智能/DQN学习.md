---
title: DQN学习
date: 2025-04-29 16:04:36
author: 长白崎
categories:
  - ["AI","算法","DQN"]
tags:
  - "DQN"
  - "AI"
  - "算法"
---

# DQN学习

---



Q表更新公式

$Q(state,action)=R(state,action)+\gamma*Max[Q(next_state,all_actions)]$

![image-20250429164210987](./DQN学习/images/image-20250429164210987.png)

![image-20250429164302993](./DQN学习/images/image-20250429164302993.png)

其中`Replay Memory D`是历史记录队列，是针对每次决策后的的状态值和当前值的一个记录

![image-20250429170319680](./DQN学习/images/image-20250429170319680.png)