5.จากตาราง Customer และตาราง Order ให้เขียน Query เชื่อมข้อมูล 2 ตารางเข้าด้วยกัน

SELECT Customer.id
FROM Customer
LEFT JOIN Order ON Customer.id = Orders.id
ORDER BY Customers.id;