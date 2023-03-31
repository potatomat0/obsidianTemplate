---
type: study note 
title: Tạo biến môi trường trên powershell
fc-calendar: Gregorian Calendar
fc-date: 
 year: 2023
 month: January
 day:   13
modification date: Friday 13th January 2023 12:43:25
---
#selflearn #powershell 
link tham khảo: [about Environment Variables - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3)
- chẳng hạn mình thường xuyên mở folder ITC ra để làm bài tập, mình muốn mở chúng nhanh hơn mà không cần sử dụng flowlauncher (vì app này cũng ngốn đôi lúc hơn 200mb ram) 
	 1. cài đặt trên windows cho terminal mặc định là powershell, cho terminal được startup mỗi lần khởi động máy 
	 2. mở powershell, tạo biến môi trường như sau: 
		 1. `$Env:ITC = "C:\Users\winge\OneDrive\desktop\hk5"`
		 2. ở đây $Env sẽ xác định rằng biến ITC này là biến của môi trường 
		 3. từ đây mà mỗi lần muốn mở folder ra để edit, mình chỉ cần nhấn tổ hợp ```
> 		B1: <windows> + 1 (do terminal là app đầu tiên trên thanh taskbar) |
> 		B2: cd $Env:ITC 
> 		B3: vim . hoặc code . 
