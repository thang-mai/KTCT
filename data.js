const questionBank = [
  {
    id: 1,
    question: "Kinh tế chính trị Mác - Lênin bắt đầu phát triển vào thời gian nào?",
    options: ["Từ đầu thế kỉ XX", "Từ đầu thế kỉ XIX", "Từ cuối thế kỉ XIX", "Từ giữa thế kỉ XIX"],
    answer: 3
  },
  {
    id: 2,
    question: "Chủ nghĩa trọng nông là hệ thống lí luận kinh tế đi sâu vào nghiên cứu và phân tích để rút ra lí luận kinh tế tù’ lĩnh vực nào?",
    options: ["Công nghiệp", "Nông nghiệp", "Ngoại thương", "Dịch vụ"],
    answer: 1
  },
  {
    id: 3,
    question: "W. Petty là người sáng lập ra trường phái",
    options: ["kinh tế chính trị cổ điển Anh.", "kinh tế chính trị tiểu tư sản.", "kinh tế chính trị cổ điển Pháp.", "chủ nghĩa trọng thương."],
    answer: 0
  },
  {
    id: 4,
    question: "C. Mác đánh giá người sáng lập ra kinh tế chính trị cố điên Anh là ai?",
    options: ["Thomas Malthus", "Adam Smith", "David Ricardo", "William Petty"],
    answer: 3
  },
  {
    id: 5,
    question: "Chủ nghĩa trọng thương ra đời trong thời kì",
    options: ["chủ nghĩa tư bản tự do cạnh tranh.", "chủ nghĩa tư bản độc quyền.", "tích luỹ nguyên thuỷ tư bản chù nghĩa.", "tích luỹ tư bản."],
    answer: 2
  },
  {
    id: 6,
    question: "Học thuyết nào giữ vị trí là hòn đá tảng trong toàn bộ lí luận kinh tế của C. Mác?",
    options: ["Học thuyết tuần hoàn và chu chuyển tư bản", "Học thuyết giá trị thặng dư", "Học thuyết giá trị", "Học thuyết tích luỹ"],
    answer: 1
  },
  {
    id: 7,
    question: "Lí luận kinh tế chính trị của C.Mác và Ph.Ăngghen được thể hiện tập trung và cô đọng nhất trong tác phẩm nào?",
    options: ["Hệ tư tưởng Đức", "Tư bản", "Lao động làm thuê và tư bản", "Bản thảo kinh tế"],
    answer: 1
  },
  {
    id: 8,
    question: "Điền từ ngữ thích hợp vào chỗ chấm: Quy luật kinh tế tồn tại ...(1)..., không phụ thuộc vào ý chí của con người, con người không thể ...(2)... quy luật kinh tế, nhưng có thể ...(3)... và ...(4)... quy luật kinh tế.",
    options: [
      "(1) chủ quan, (2) bỏ qua, (3) nhận thức, (4) hành động", 
      "(1) chủ quan, (2) thủ tiêu, (3) nhận thức, (4) vận dụng", 
      "(1) khách quan, (2) bỏ qua, (3) nhận thức, (4) hành động", 
      "(1) khách quan, (2) thủ tiêu, (3) nhận thức, (4) vận dụng"
    ],
    answer: 3
  },
  {
    id: 9,
    question: "Điền từ ngữ thích hợp vào chỗ chấm: Chính sách kinh tế là sản phẩm ...(1)... của con người được hình thành trên cơ sở ...(2)... các quy luật kinh tế.",
    options: [
      "(1) khách quan, (2) vận dụng", 
      "(1) khách quan, (2) nhận thức", 
      "(1) chủ quan, (2) vận dụng", 
      "(1) chủ quan, (2) nhận thức"
    ],
    answer: 2
  },
  {
    id: 10,
    question: "Kinh tế chính trị Mác - Lênin có nhiệm vụ nghiên cứu là",
    options: [
      "tìm ra các quy luật kinh tế và sự tác động của nó nhằm ứng dụng một cách có hiệu quả trong thực tiễn.", 
      "tìm ra bản chất của lực lượng sản xuất.", 
      "tìm ra các quy luật kinh tế nhằm đạt được hiệu quả kinh tế mong muốn.", 
      "tìm ra bản chất của quan hệ sản xuất xã hội."
    ],
    answer: 0
  },
  {
    id: 11,
    question: "Thuật ngữ khoa học “kinh tế chính trị” xuất hiện lần đầu tiên vào năm nào?",
    options: ["1610", "1615", "1618", "1612"],
    answer: 1
  },
  {
    id: 12,
    question: "Tác phẩm Chuyên luận về Kinh tế chính trị của tác giả nào?",
    options: ["ThomasMun", "William Petty", "WilliamStafford", "Antoine de Montchrétien"],
    answer: 3
  },
  {
    id: 13,
    question: "Kinh tế chính trị Mác - Lênin có các chức năng nào?",
    options: [
      "Nhận thức, thực tiễn, xã hội, phương pháp luận", 
      "Nhận thức, thực tiễn, giáo dục, xã hội", 
      "Nhận thức, thực tiễn, tư tưởng, giáo dục", 
      "Nhận thức, thực tiễn, tư tưởng, phương pháp luận"
    ],
    answer: 3
  },
  {
    id: 14,
    question: "Ý nghĩa của tư tưởng kinh tế của chủ nghĩa trọng thương là gì?",
    options: ["Chưa phát hiện quy luật kinh tế", "Áp dụng quy luật kinh tế", "Phát hiện và áp dụng quy luật kinh tế", "Phát hiện ra quy luật kinh tế"],
    answer: 0
  },
  {
    id: 15,
    question: "Chủ nghĩa trọng nông có đối tượng nghiên cứu thuộc lĩnh vực",
    options: ["thương nghiệp.", "công nghiệp.", "dịch vụ.", "nông nghiệp."],
    answer: 3
  },
  {
    id: 16,
    question: "Trường phái nào được ghi nhận là hệ thống lí luận kinh tế chính trị bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩa?",
    options: ["Kinh tế chính trị tư sản cổ điển ở Anh", "Chủ nghĩa trọng thương", "Chủ nghĩa trọng nông", "Trường phái trọng tiền"],
    answer: 1
  },
  {
    id: 17,
    question: "Chủ nghĩa trọng thương lí giải nguồn gốc của lợi nhuận được tạo ra từ đâu?",
    options: ["Thương nghiệp", "Công nghiệp", "Nông nghiệp", "Dịch vụ"],
    answer: 0
  },
  {
    id: 18,
    question: "Chủ nghĩa trọng thương đặc biệt coi trọng vai trò hoạt động trong lĩnh vực",
    options: ["công nghiệp.", "nông nghiệp.", "lưu thông.", "tiền tệ."],
    answer: 2
  },
  {
    id: 19,
    question: "Phương pháp trừu tượng hóa khoa học trong nghiên cứu kinh tế chính trị Mác - Lênin đòi hỏi",
    options: [
      "quá trình nghiên cứu đi từ trừu tượng đến cụ thể, nêu lên những khái niệm, phạm trù, vạch ra những mối quan hệ giữa chúng, gạt bỏ những bộ phận phức tạp của đối tượng nghiên cứu.", 
      "quá trình nghiên cứu đi từ cụ thể đến trừu tượng, nhờ đó nêu lên những khái niệm, phạm trù, vạch ra những mối quan hệ giữa chúng và ngược lại.", 
      "gạt bỏ các yếu tố ngẫu nhiên, tạm thời, gián tiếp, trên cơ sở đó tách ra được những dấu hiệu điển hình, bền vững, ổn định, trực tiếp của đối tượng nghiên cứu.", 
      "quá trình nghiên cứu đi từ trừu tượng đến cụ thể, nhờ đó nêu lên những khái niệm, phạm trù, vạch ra những mối quan hệ giữa chúng và ngược lại."
    ],
    answer: 2
  },
  {
    id: 20,
    question: "Phương pháp quan trọng nhất trong nghiên cứu kinh tế chính trị Mác - Lênin là",
    options: ["phân tích và tổng hợp.", "mô hình hóa.", "logic và lịch sử.", "trừu tượng hóa khoa học."],
    answer: 3
  },
  {
    id: 21,
    question: "Kinh tế chính trị chính thức trở thành một môn khoa học vào thời gian nào?",
    options: ["Thế kỉ XVIII", "Thế kỉ XVII", "Thế kỉ XVI", "Thế kỉ XIX"],
    answer: 0
  },
  {
    id: 22,
    question: "Lí luận kinh tế chính trị của C. Mác được kế thừa và phát triển trực tiếp thành tựu của",
    options: ["Kinh tế chính trị cổ điển Anh.", "Kinh tế chính trị tiểu tư sản.", "Chủ nghĩa trọng nông.", "Chủ nghĩa trọng thương."],
    answer: 0
  },
  {
    id: 23,
    question: "Quy luật kinh tế là",
    options: [
      "chủ quan, tồn tại trong mọi phương thức sản xuất.", 
      "khách quan, tồn tại trong mọi phương thức sản xuất.", 
      "những mối liên hệ phản ánh bản chất, khách quan, lặp đi lặp lại của các hiện tượng và quá trình kinh tế.", 
      "phản ánh bản chất của các hiện tượng trong xã hội."
    ],
    answer: 2
  },
  {
    id: 24,
    question: "Mục đích nghiên cứu của kinh tế chính trị Mác - Lênin là gì?",
    options: [
      "Vận dụng quy luật kinh tế chi phối quan hệ sản xuất và trao đổi", 
      "Tìm ra các quy luật kinh tế chi phối sự vận động của phương thức sản xuất", 
      "Giải quyết hài hoà các lợi ích kinh tế", 
      "Phát hiện ra các quy luật kinh tế chi phối các quan hệ giữa người với người trong sản xuất và trao đổi"
    ],
    answer: 3
  },
  {
    id: 25,
    question: "Kinh tế chính trị tư sản cổ điển Anh hình thành và phát triển vào thời gian nào?",
    options: [
      "Cuối thế kỉ XIX đến nửa đầu thế kỉ XX", 
      "Cuối thế kỉ XVI đến nửa đầu thế kỉ XVII", 
      "Cuối thế kỉ XVIII đến nửa đầu thế kỉ XIX", 
      "Cuối thế kỉ XVII đến nửa đầu thế kỉ XVIII"
    ],
    answer: 2
  },
  {
    id: 26,
    question: "Đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin là",
    options: [
      "quan hệ xã hội giữa người với người trong quá trình sản xuất.", 
      "các quan hệ xã hội của sản xuất và trao đổi đặt trong mối liên hệ biện chứng với trình độ phát triển của lực lượng sản xuất và kiến trúc thượng tầng tương ứng của phương thức sản xuất nhất định.", 
      "quan hệ sản xuất, phân phối, trao đổi và tiêu dùng.", 
      "sản xuất của cải vật chất."
    ],
    answer: 1
  },
  {
    id: 27,
    question: "Đối tượng nghiên cứu của chủ nghĩa trọng thương thuộc lĩnh vực nào?",
    options: ["Sản xuất", "Dịch vụ", "Lưu thông", "Tiền tệ"],
    answer: 2
  },
  {
    id: 28,
    question: "Đối tượng nghiên cứu của kinh tế chính trị cổ điển Anh là các quan hệ kinh tế trong lĩnh vực nào?",
    options: ["Lưu thông", "Sản xuất", "Dịch vụ", "Tài chính"],
    answer: 1
  },
  {
    id: 29,
    question: "Giá cả hàng hóa được thể hiện như thế nào khi cung < cầu?",
    options: ["Giá cả > giá trị", "Giá cả vận động xoay quanh giá trị", "Giá cả < giá trị", "Giá cả = giá trị"],
    answer: 0
  },
  {
    id: 30,
    question: "Những khuyết tật của nền kinh tế thị trường là gì?",
    options: [
      "Tiềm ẩn rủi ro khủng hoảng; phân hóa sâu sắc trong xã hội; xu hướng sử dụng hợp lí tài nguyên không thể tái tạo được", 
      "Tiềm ẩn rủi ro khủng hoảng; phân hóa sâu sắc trong xã hội; xu hướng phân bổ hợp lí tài nguyên không thể tái tạo được", 
      "Tiềm ẩn rủi ro khủng hoảng; tạo lập sự công bằng trong xã hội; xu hướng cạn kiệt tài nguyên không thể tái tạo được", 
      "Tiềm ẩn rủi ro khủng hoảng; xu hướng cạn kiệt tài nguyên không thể tái tạo được; phân hóa sâu sắc trong xã hội"
    ],
    answer: 3
  },
  {
    id: 31,
    question: "Cạnh tranh giữa các ngành xảy ra khi có sự khác nhau về",
    options: ["lợi nhuận.", "tỉ suất lợi nhuận.", "giá trị trao đổi của hàng hóa.", "cung, cầu các loại hàng hóa."],
    answer: 1
  },
  {
    id: 32,
    question: "Khi tăng cường độ lao động lên 2 lần thì các nhân tố khác như thế nào?",
    options: [
      "Tổng số sản phẩm tăng lên 2 lần và lượng giá trị trong một đơn vị hàng hóa cùng giảm xuống 2 lần.", 
      "Tổng số sản phẩm tăng lên 2 lần và lượng giá trị trong một đơn vị hàng hóa không đổi.", 
      "Tổng số sản phẩm và lượng giá trị trong một đơn vị hàng hóa cùng tăng lên 2 lần.", 
      "Tổng số sản phẩm và lượng giá trị trong một đơn vị hàng hóa cùng giảm xuống 2 lần."
    ],
    answer: 1
  },
  {
    id: 33,
    question: "Việc tăng năng suất lao động ảnh hưởng đến các nhân tố khác như thế nào?",
    options: [
      "Tổng số sản phẩm tăng, tổng giá trị sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa giảm", 
      "Tổng số sản phẩm tăng, tổng giá trị sản phẩm không đổi và lượng giá trị trong một đơn vị hàng hóa tăng.", 
      "Tổng số sản phẩm tăng, tổng giá trị sản phẩm giảm và lượng giá trị trong một đơn vị hàng hóa giảm", 
      "Tổng số sản phẩm tăng, tổng giá trị sản phẩm không đổi và lượng giá trị trong một đơn vị hàng hóa giảm"
    ],
    answer: 3
  },
  {
    id: 34,
    question: "Giá trị của hàng hóa là phạm trù",
    options: ["ngẫu nhiên.", "tất nhiên.", "lịch sử.", "vĩnh viễn."],
    answer: 2
  },
  {
    id: 35,
    question: "Theo nghĩa trừu tượng, thị trường là",
    options: [
      "tổng thể các yếu tố kinh tế vận động theo quy luật của thị trường.", 
      "tổng hoà các mối quan hệ liên quan đến trao đổi, mua bán hàng hóa, dịch vụ trong xã hội.", 
      "nơi diễn ra hành vi trao đổi, mua bán hàng hóa giữa các chủ thể kinh tế với nhau.", 
      "nơi người bán quyết định giá cả, người mua chỉ được quyền chọn lựa."
    ],
    answer: 1
  },
  {
    id: 36,
    question: "Cạnh tranh trong nội bộ ngành dựa trên",
    options: [
      "trình độ tay nghề công nhân, trang thiết bị kĩ thuật, công nghệ và khả năng tổ chức quản lí.", 
      "trình độ tay nghề công nhân, trang thiết bị kĩ thuật, công nghệ và phân bổ các nguồn lực kinh tế.", 
      "trình độ tay nghề công nhân, trang thiết bị kĩ thuật, công nghệ và đào thải các nhân tố lạc hậu.", 
      "trình độ tay nghề công nhân, đào thải các nhân tố lạc hậu và khả năng tổ chức quản lí."
    ],
    answer: 0
  },
  {
    id: 37,
    question: "Điền từ ngữ thích họp vào chỗ chấm: Quy luật cạnh tranh là quy luật kinh tế ...(1)... một cách ...(2)... mối quan hệ ...(3)... kinh tế giữa các chủ thể trong sản xuất và trao đổi hàng hóa.",
    options: [
      "(1) điều tiết, (2) khách quan, (3) cạnh tranh", 
      "(1) điều tiết, (2) chủ quan, (3) ganh đua", 
      "(1) phân bổ, (2) khách quan, (3) ganh đua", 
      "(1) điều tiết, (2) khách quan, (3) ganh đua"
    ],
    answer: 3
  },
  {
    id: 38,
    question: "Lao động cụ thể phản ánh tính chất nào của người sản xuất hàng hóa?",
    options: ["Vĩnh viễn", "Xã hội", "Lịch sử", "Tư nhân"],
    answer: 3
  },
  {
    id: 39,
    question: "Tính hai mặt của lao động sản xuất hàng hóa là",
    options: ["lao động giản đơn và lao động phức tạp.", "lao động quá khứ và lao động sống.", "lao động cụ thể và lao động trừu tượng.", "lao động tư nhân và lao động xã hội."],
    answer: 2
  },
  {
    id: 40,
    question: "Cơ chế vận động của quy luật giá trị biểu hiện",
    options: ["cung - cầu về hàng hóa.", "sự cạnh tranh giữa các loại hàng hóa.", "giá cả hàng hóa lên xuống xung quanh giá trị hàng hóa.", "giá cả bằng giá trị hàng hóa."],
    answer: 2
  },
  {
    id: 41,
    question: "Vai trò kinh tế của nhà nước trong nền kinh tế thị trường là",
    options: [
      "quản lí nhà nước về kinh tế, khắc phục những khuyết tật của thị trường.", 
      "kết nối thông tin trong quan hệ mua, bán.", 
      "định hướng sản xuất, tiêu dùng trong thị trường.", 
      "điều tiết cung cầu hàng hóa."
    ],
    answer: 0
  },
  {
    id: 42,
    question: "Giá trị sử dụng của hàng hóa nhằm",
    options: ["thoả mãn nhu cầu của người bán.", "thoả mãn nhu cầu của người mua.", "thoả mãn nhu cầu của người quản lí.", "thoả mãn nhu cầu của người sản xuất ra nó."],
    answer: 1
  },
  {
    id: 43,
    question: "Lao động cụ thể tạo ra",
    options: ["giá trị trao đổi của hàng hóa.", "giá trị sử dụng của hàng hóa.", "giá trị cá biệt của hàng hóa.", "giá trị của hàng hóa."],
    answer: 1
  },
  {
    id: 44,
    question: "Lao động cụ thể là",
    options: [
      "lao động có ích dưới một hình thức cụ thể của những nghề nghiệp chuyên môn nhất định.", 
      "lao động giản đơn.", 
      "lao động chân tay.", 
      "lao động ở các ngành, nghề cụ thể."
    ],
    answer: 0
  },
  {
    id: 45,
    question: "Cơ sở để hàng hóa A có thể trao đổi được với hàng hóa B là",
    options: [
      "lượng lao động hao phí của hàng hóa A > hàng hóa B.", 
      "lượng lao động hao phí của hàng hóa A < hàng hóa B.", 
      "lượng lao động hao phí của hàng hóa A = hàng hóa B.", 
      "lượng lao động hao phí của hàng hóa A ≠hàng hóa B."
    ],
    answer: 2
  },
  {
    id: 46,
    question: "Vì sao hàng hóa có hai thuộc tính giá trị và giá trị sử dụng?",
    options: [
      "Lao động sản xuất hàng hóa có tính hai mặt: lao động cụ thể và lao động trừu tượng", 
      "Lao động sản xuất hàng hóa có mục đích để trao đổi, mua bán", 
      "Lao động sản xuất hàng hóa có tính chất tư nhân và xã hội", 
      "Lao động sản xuất hàng hóa có hai loại lao động phức tạp và lao động giản đơn"
    ],
    answer: 0
  },
  {
    id: 47,
    question: "Điền từ ngữ thích hợp vào chỗ chấm: Thời gian lao động xã hội cần thiết là thời gian đòi hỏi để sản xuất ra một giá trị sử dụng nào đó trong những điều kiện ...(1)... của xã hội với trình độ ...(2)... trung bình, cường độ lao động ...(3)...",
    options: [
      "(1) xấu, (2) trung bình, (3) xấu", 
      "(1) tốt, (2) thành thạo, (3) tốt", 
      "(1) bình thường, (2) thành thạo, (3) trung bình", 
      "(1) trung bình, (2) thành thạo, (3) trung bình"
    ],
    answer: 2
  },
  {
    id: 48,
    question: "Hình thức kinh tế đầu tiên của xã hội loài người là",
    options: ["kinh tế hàng hóa.", "kinh tế tự nhiên.", "kinh tế thị trường.", "kinh tế cá thể."],
    answer: 1
  },
  {
    id: 49,
    question: "Tiền tệ có mấy chức năng?",
    options: ["3", "4", "6", "5"],
    answer: 3
  },
  {
    id: 50,
    question: "Hình thái giá trị đầu tiên của tiền tệ là",
    options: ["hình thái tiền tệ", "hình thái chung của giá trị", "hình thái mở rộng của giá trị", "hình thái giá trị giản đơn hay ngẫu nhiên"],
    answer: 3
  },
  {
    id: 51,
    question: "Khi tăng cường độ lao động thì",
    options: [
      "tổng số sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa tăng.", 
      "tổng số sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa giảm.", 
      "tổng số sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa không đổi."
    ],
    answer: 2
  },
  {
    id: 52,
    question: "Lượng giá trị của một đơn vị hàng hóa là gì?",
    options: [
      "Lao động sống của người sản xuất hàng hóa kết tinh trong hàng hóa đó", 
      "Thời gian lao động hao phí sản xuất ra hàng hóa đó", 
      "Lượng lao động đã hao phí để sản xuất ra hàng hóa đó", 
      "Lao động trừu tượng của người sản xuất hàng hóa kết tinh trong hàng hóa đó"
    ],
    answer: 2
  },
  {
    id: 53,
    question: "Đặc điểm của hàng hóa hữu hình là",
    options: [
      "không thể cất trữ được, tồn tại ở các dạng vật thể, thực hiện giá trị sử dụng và giá trị cùng diễn ra.", 
      "có thể cất trữ được, tồn tại ở các dạng vật thể, thực hiện giá trị sử dụng và giá trị cùng diễn ra.", 
      "có thể cất trữ được, tồn tại ở các dạng phi vật thể, thực hiện giá trị sử dụng và giá trị cùng diễn ra.", 
      "không thể cất trữ được, tồn tại ở các dạng phi vật thể, thực hiện giá trị sử dụng và giá trị cùng diễn ra."
    ],
    answer: 1
  },
  {
    id: 54,
    question: "Kết quả của cạnh tranh giữa các ngành là",
    options: [
      "hình thành tỉ suất lợi nhuận bình quân và tư bản tự do di chuyển nguồn lực từ ngành này sang ngành khác.", 
      "nhằm thu nhiều lợi nhuận nhất và hình thành tỉ suất lợi nhuận bình quân.", 
      "nhằm thu nhiều lợi nhuận nhất và tự do di chuyển hàng hóa từ ngành này sang ngành khác.", 
      "nhằm thu nhiều lợi nhuận nhất và tư bản tự do di chuyển nguồn lực từ ngành này sang ngành khác."
    ],
    answer: 0
  },
  {
    id: 55,
    question: "Một trong những tác động tiêu cực của quy luật giá trị là gì?",
    options: ["Làm cho chi phí sản xuất hàng hóa tăng lên", "Làm cho hàng hóa phân phối không đều giữa các vùng", "Phân hóa giàu, nghèo giữa những người sản xuất hàng hóa", "Làm cho giá trị hàng hóa giảm xuống"],
    answer: 2
  },
  {
    id: 56,
    question: "Ai là người đầu tiên phát hiện ra tính hai mặt của lao động sản xuất hàng hóa?",
    options: ["A. Smith", "Ph. Ăngghen", "C. Mác", "D. Ricacdo"],
    answer: 2
  },
  {
    id: 57,
    question: "Biểu hiện nào thể hiện sự hoạt động của quy luật giá trị",
    options: ["Cơ chế cạnh tranh của hàng hóa", "Sự lên xuống của tiền tệ", "Sự cạnh tranh giữa các chủ thể sản xuất", "Sự vận động của giá cả xung quanh giá trị"],
    answer: 3
  },
  {
    id: 58,
    question: "Quy luật giá trị điều tiết sản xuất, có nghĩa là",
    options: ["quản lí các ngành sản xuất.", "điều hoà, phân bổ tư liệu sản xuất và sức lao động.", "cung ứng hàng hóa cho sản xuất.", "quy mô sản xuất."],
    answer: 1
  },
  {
    id: 59,
    question: "Vai trò cơ bản nhất của các chủ thể trung gian khi tham gia vào thị trường là gì?",
    options: ["Định hướng sản xuất", "Tìm kiếm lợi ích kinh tế cho mình", "Điều tiết cung cầu hàng hóa", "Kết nối thông tin trong quan hệ mua, bán"],
    answer: 3
  },
  {
    id: 60,
    question: "Thị trường chợ online có biểu hiện nào?",
    options: [
      "Nơi người bán quyết định giá cả, người mua chỉ được quyền chọn lựa", 
      "Nơi người mua và người bán trực tiếp thoả thuận giá cả của hàng hóa", 
      "Nơi người mua được lựa chọn và so sánh giá cả của hàng hóa", 
      "Nơi người mua được quyền quyết định giá cả của hàng hóa"
    ],
    answer: 2
  },
  {
    id: 61,
    question: "Thị trường theo nghĩa cụ thể là gì?",
    options: [
      "Nơi người mua được quyền quyết định giá", 
      "Nơi diễn ra hành vi trao đổi, mua bán hàng hóa giữa các chủ thể kinh tế với nhau", 
      "Tổng hòa các mối quan hệ liên quan đến trao đổi, mua bán hàng hóa, dịch vụ trong xã hội", 
      "Nơi người bán quyết định giá cả, người mua chỉ được quyền chọn lựa"
    ],
    answer: 1
  },
  {
    id: 62,
    question: "Vai trò chủ yếu của thị trường là gì?",
    options: [
      "Kích thích sự sáng tạo và tạo ra cách thức phân bổ nguồn lực hiệu quả trong nền kinh tế, gắn kết nền kinh tế thành một chỉnh thể", 
      "Thực hiện giá trị hàng hóa và gắn kết nền kinh tế thành một chỉnh thể", 
      "Thực hiện giá trị hàng hóa, kích thích sự sáng tạo và tạo ra cách thức phân bổ nguồn lực hiệu quả trong nền kinh tế", 
      "Thực hiện giá trị hàng hóa, kích thích sự sáng tạo và gắn kết nền kinh tế thành một chỉnh thể"
    ],
    answer: 2
  },
  {
    id: 63,
    question: "Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì",
    options: [
      "tổng số sản phẩm tăng 2 lần, tổng giá trị sản phẩm tăng lên 2 lần.", 
      "lượng giá trị trong một đơn vị hàng hóa giảm 2 lần, tổng giá trị sản phẩm tăng 2 lần.", 
      "tổng số sản phẩm tăng lên 4 lần, tổng giá trị sản phẩm tăng 2 lần.", 
      "tổng số sản phẩm tăng 2 lần, lượng giá trị trong một đơn vị hàng hóa giảm 2 lần."
    ],
    answer: 2
  },
  {
    id: 64,
    question: "Kinh tế thị trường là giai đoạn phát triển cao của nền kinh tế nào?",
    options: ["Kinh tế hàng hóa giản đơn", "Kinh tế hàng hóa", "Kinh tế tư bản chủ nghĩa", "Kinh tế tự nhiên"],
    answer: 1
  },
  {
    id: 65,
    question: "Tiêu thức phân chia thị trường trong nước và thị trường thế giới căn cứ vào",
    options: ["phạm vi các quan hệ.", "đầu vào, đầu ra của quá trình sản xuất.", "tính chất và cơ chế vận hành của thị trường.", "đối tượng hàng hóa đưa ra trao đổi, mua bán."],
    answer: 0
  },
  {
    id: 66,
    question: "Lao động trừu tượng là gì?",
    options: [
      "Lao động phức tạp của người sản xuất hàng hóa, không kể đến những hình thức cụ thể của nó.", 
      "Lao động cá biệt của người sản xuất hàng hóa, không kể đến những hình thức cụ thể của nó.", 
      "Lao động xã hội của người sản xuất hàng hóa không kể đến những hình thức cụ thể của nó, đó là sự hao phí sức lao động của người sản xuất hàng hóa về cơ bắp, thần kinh, trí óc.", 
      "Lao động cụ thể của người sản xuất hàng hóa không kể đến những hình thức cụ thể của nó."
    ],
    answer: 2
  },
  {
    id: 67,
    question: "Quy luật giá trị tồn tại trong",
    options: ["nền sản xuất xã hội chủ nghĩa.", "mọi nền sản xuất.", "nền sản xuất hàng hóa.", "nền sản xuất tư bản chủ nghĩa."],
    answer: 2
  },
  {
    id: 68,
    question: "Mạng di động A khuyến mãi giảm 50% giá trị thẻ nạp, một tuần sau mạng di động B và C cũng đưa ra chương trình khuyến mãi tương tự. Hiện tượng này phản ánh quy luật nào của thị trường?",
    options: ["Quy luật cung - cầu", "Quy luật giá trị", "Quy luật cạnh tranh", "Quy luật lưu thông tiền tệ"],
    answer: 2
  },
  {
    id: 69,
    question: "Khi giá cả hàng hóa giảm thì cung - cầu sẽ thay đổi như thế nào?",
    options: ["Cung tăng, cầu giảm", "Cung tăng, cầu tăng", "Cung giảm, cầu giảm", "Cung giảm, cầu tăng"],
    answer: 3
  },
  {
    id: 70,
    question: "Giá trị của tất cả mọi hàng hóa đều được biểu hiện bằng một số lượng nhất định một loại hàng hóa đóng vai trò tiền tệ xuất hiện trong hình thái",
    options: ["mở rộng của giá trị.", "giá trị giản đơn hay ngẫu nhiên.", "tiền tệ.", "chung của giá trị."],
    answer: 2
  },
  {
    id: 71,
    question: "Người sản xuất vi phạm quy luật giá trị trong trường hợp nào?",
    options: [
      "Thời gian lao động cá biệt bằng thời gian lao động xã hội cần thiết", 
      "Thời gian lao động cá biệt lớn hơn thời gian lao động xã hội cần thiết", 
      "Thời gian lao động cá biệt lớn hơn hoặc nhỏ hơn thời gian lao động xã hội cần thiết", 
      "Thời gian lao động cá biệt nhỏ hơn thời gian lao động xã hội cần thiết"
    ],
    answer: 1
  },
  {
    id: 72,
    question: "Để xác định giá cả của hàng hóa cần dựa trên cơ sở nào?",
    options: ["Quan hệ cung, cầu về hàng hóa", "Giá trị của hàng hóa", "Mốt thời thượng của hàng hóa", "Giá trị sử dụng của hàng hóa"],
    answer: 1
  },
  {
    id: 73,
    question: "Cạnh tranh giữa các ngành có mục đích gì?",
    options: ["Đổi mới công nghệ", "Thu nhiều lợi nhuận nhất", "Nhằm mua bán hàng hóa với giá cả có lợi nhất", "Tìm nơi đầu tư có lợi hơn"],
    answer: 3
  },
  {
    id: 74,
    question: "Nguyên nhân dẫn đến cạnh tranh trong sản xuất và lưu thông hàng hóa xuất phát từ đâu?",
    options: ["Nguồn lao động dồi dào trong xã hội", "Sự tồn tại nhiều chủ sở hữu", "Sự gia tăng sản xuất hàng hóa", "Sự thay đổi cung, cầu"],
    answer: 1
  },
  {
    id: 75,
    question: "Điều kiện ra đời và tồn tại của sản xuất hàng hóa là gì?",
    options: [
      "Phân công lao động xã hội và đa dạng hóa các thành phần kinh tế", 
      "Phân công lao động xã hội và sự tách biệt về mặt kinh tế của các chủ thể sản xuất", 
      "Phân công lao động cá biệt và chế độ tư hữu về tư liệu sản xuất", 
      "Phân công lao động xã hội và chế độ công hữu về tư liệu sản xuất"
    ],
    answer: 1
  },
  {
    id: 76,
    question: "Mục đích của cạnh tranh là gì?",
    options: ["Mua bán hàng hóa với giá cả có lợi nhất", "Giành các điều kiện sản xuất thuận lợi nhất", "Thu được lợi ích tối đa", "Sản xuất ra nhiều hàng hóa nhất"],
    answer: 2
  },
  {
    id: 77,
    question: "Khẳng định nào sau đây thể hiện đúng mối quan hệ giữa giá cả và giá trị?",
    options: [
      "Giá trị là hình thức biểu hiện bằng tiền của giá cả", 
      "Giá cả còn chịu ảnh hưởng của quy luật cung - cầu và giá trị của tiền", 
      "Giá trị là cơ sở của giá cả, là yếu tố quyết định của giá cả", 
      "Giá cả còn chịu ảnh hưởng của quy luật cạnh tranh và giá trị của tiền"
    ],
    answer: 2
  },
  {
    id: 78,
    question: "Mục đích của người sản xuất trong kinh tế tự nhiên là gì?",
    options: ["Tăng cường độ lao động", "Trao đổi, mua bán", "Tăng năng suất lao động", "Tự tiêu dùng"],
    answer: 3
  },
  {
    id: 79,
    question: "Cơ chế thị trường là",
    options: [
      "sự kết hợp giữa sự tự do của cá nhân và điều tiết của nhà nước.", 
      "sự kết hợp các yếu tố khách quan và chủ quan.", 
      "hệ thống các quan hệ mang tính tự điều chỉnh tuân theo yêu cầu của các quy luật kinh tế.", 
      "hệ thống các quan hệ mang tính tự phát tuân theo yêu cầu của các quy luật kinh tế."
    ],
    answer: 2
  },
  {
    id: 80,
    question: "Vai trò quan trọng nhất của người tiêu dùng khi tham gia vào thị trường là gì?",
    options: ["Định hướng tiêu dùng", "Định hướng sản xuất", "Tìm kiếm lợi ích cho mình", "Điều tiết cung - cầu hàng hóa"],
    answer: 1
  },
  {
    id: 81,
    question: "Thực hiện chức năng thước đo giá trị, tiền được dùng để",
    options: ["làm phương tiện nộp thuế.", "đo lường biểu hiện giá trị của các hàng hóa khác.", "làm phương tiện trả nợ.", "làm phương tiện mua hàng hóa."],
    answer: 1
  },
  {
    id: 82,
    question: "Sản xuất hàng hóa là",
    options: [
      "kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm nhằm mục đích trao đổi, mua bán.", 
      "kiểu tổ chức hoạt động kinh tế mà ở đó, sản phẩm được sản xuất ra nhằm thoả mãn nhu cầu của bản thân người sản xuất.", 
      "kiểu tổ chức hoạt động kinh tế mà ở đó, sản phẩm được sản xuất ra nhằm thoả mãn nhu cầu mang tính nội bộ.", 
      "kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm không nhằm mục đích phục vụ nhu cầu tiêu dùng của chính mình mà để trao đổi, mua bán."
    ],
    answer: 0
  },
  {
    id: 83,
    question: "Một trong những mặt hạn chế của cạnh tranh là gì?",
    options: ["Làm cho cung lớn hơn cầu", "Gây tổn hại đến môi trường kinh doanh", "Tiền giấy khan hiếm trên thị trường", "Gây ra hiện tượng lạm phát"],
    answer: 1
  },
  {
    id: 84,
    question: "Các nhân tố khác biến động như thế nào khi tăng cường độ lao động lên 2 lần?",
    options: [
      "Tổng số sản phẩm, tổng giá trị sản phẩm và lượng giá trị trong một đơn vị hàng hóa cùng giảm xuống 1/2 lần", 
      "Tổng số sản phẩm, tổng giá trị sản phẩm cùng giảm xuống 1/2 lần và lượng giá trị trong một đơn vị hàng hóa không đổi", 
      "Tổng số sản phẩm, tổng giá trị sản phẩm và lượng giá trị trong một đơn vị hàng hóa cùng tăng lên 2 lần", 
      "Tổng số sản phẩm, tổng giá trị sản phẩm cùng tăng lên 2 lần và lượng giá trị trong một đơn vị hàng hóa không đổi"
    ],
    answer: 3
  },
  {
    id: 85,
    question: "Quan hệ giữa năng suất lao động và lượng giá trị trong một đơn vị hàng hóa là",
    options: ["không đổi.", "tỉ lệ thuận.", "quyết định lượng giá trị sử dụng.", "tỉ lệ nghịch."],
    answer: 3
  },
  {
    id: 86,
    question: "Giá trị sử dụng của hàng hóa là phạm trù",
    options: ["tất nhiên.", "lịch sử.", "ngẫu nhiên.", "vĩnh viễn."],
    answer: 3
  },
  {
    id: 87,
    question: "Tiêu thức phân chia thành thị trường tự do và thị trường có điều tiết căn cứ vào",
    options: ["tính chất và cơ chế vận hành của thị trường.", "đầu vào, đầu ra của quá trình sản xuất.", "đối tượng hàng hóa đưa ra trao đổi, mua bán.", "tính chuyên biệt của thị trường."],
    answer: 0
  },
  {
    id: 88,
    question: "Một trong những tác động tích cực của quy luật giá trị là",
    options: ["người sản xuất ngày càng giàu có.", "người sản xuất có thể sản xuất nhiều loại hàng hóa.", "người tiêu dùng mua được hàng hóa rẻ.", "kích thích lực lượng sản xuất, năng suất lao động tăng."],
    answer: 3
  },
  {
    id: 89,
    question: "Vai trò cơ bản nhất của người sản xuất khi tham gia vào thị trường là gì?",
    options: ["Tìm kiếm lợi ích kinh tế cho mình", "Trực tiếp tạo ra của cải vật chất, sản phẩm cho xã hội để phục vụ tiêu dùng", "Kết nối thông tin trong quan hệ mua, bán", "Định hướng sản xuất"],
    answer: 1
  },
  {
    id: 90,
    question: "Để phân biệt cạnh tranh lành mạnh và cạnh tranh không lành mạnh cần dựa vào những tiêu chí",
    options: ["tính đạo đức, tính pháp luật.", "tính đạo đức, tính nhân văn.", "tính truyền thống, tính nhân văn.", "tính hiện đại, tính pháp luật."],
    answer: 0
  },
  {
    id: 91,
    question: "Cơ chế thị trường là một kiểu cơ chế vận hành",
    options: ["tăng hiệu quả nền kinh tế.", "mang tính khách quan.", "mang tính chủ quan.", "do tác động chính sách pháp luật của nhà nước."],
    answer: 1
  },
  {
    id: 92,
    question: "Tiêu thức phân chia thị trường tư liệu sản xuất và thị trường tư liệu tiêu dùng dựa vào căn cứ nào?",
    options: ["Đầu vào, đầu ra của quá trình sản xuất", "Đối tượng hàng hóa đưa ra trao đổi, mua bán", "Vai trò của các yếu tố được trao đổi, mua bán", "Tính chất và cơ chế vận hành của thị trường"],
    answer: 2
  },
  {
    id: 93,
    question: "Quy luật lưu thông tiền tệ xác định",
    options: ["lượng tiền tệ cần thiết cho lưu thông trong một thời gian nhất định.", "lượng tiền làm chức năng phương tiện lưu thông.", "lượng tiền làm chức năng cất trữ.", "lượng tiền làm chức năng mua bán."],
    answer: 0
  },
  {
    id: 94,
    question: "Biểu hiện của thị trường chợ truyền thống là",
    options: [
      "nơi người mua và người bán trực tiếp thoả thuận giá cả của hàng hóa.", 
      "nơi người mua được lựa chọn và so sánh giá cả của hàng hóa.", 
      "nơi người mua được quyền quyết định giá cả của hàng hóa.", 
      "nơi người bán quyết định giá cả, người mua chỉ được quyền chọn lựa."
    ],
    answer: 0
  },
  {
    id: 95,
    question: "Mức độ phức tạp của lao động thể hiện điều gì?",
    options: [
      "Lao động phức tạp là lao động phải qua huấn luyện, đào tạo", 
      "Trong cùng một thời gian, một hoạt động lao động phức tạp sẽ tạo ra được nhiều lượng giá trị hơn so với lao động giản đơn", 
      "Quy lao động phức tạp thành lao động giản đơn", 
      "Lao động phức tạp và lao động giản đơn đều là sự thống nhất của mặt cụ thể và mặt trừu tượng"
    ],
    answer: 1
  },
  {
    id: 96,
    question: "Số lượng các giá trị sử dụng của hàng hóa phụ thuộc vào nhân tố nào?",
    options: ["Phong tục, tập quán", "Trình độ khoa học công nghệ", "Chuyên môn hóa sản xuất", "Những điều kiện tự nhiên"],
    answer: 1
  },
  {
    id: 97,
    question: "Khi cung > cầu thì",
    options: ["giá cả < giá trị.", "giá cả vận động xoay quanh giá trị.", "giá cả > giá trị.", "giá cả = giá trị."],
    answer: 0
  },
  {
    id: 98,
    question: "Hình thức biểu hiện ra bên ngoài của giá trị hàng hóa là",
    options: ["Giá trị thặng dư", "Giá trị trao đổi", "Giá trị xã hội", "Giá trị cá biệt"],
    answer: 1
  },
  {
    id: 99,
    question: "Thực hiện chức năng phương tiện thanh toán, tiền được dùng để",
    options: ["làm phương tiện mua hàng.", "trả nợ, nộp thuế, trả tiền mua hàng chịu,...", "môi giới trong quá trình trao đổi hàng hóa.", "đo lường giá trị các hàng hóa."],
    answer: 1
  },
  {
    id: 100,
    question: "Nội dung nào dưới đây thể hiện mặt tích cực của cạnh tranh?",
    options: ["Bảo vệ môi trường tự nhiên", "Đa dạng hóa các quan hệ kinh tế", "Thúc đẩy sự phát triển nền kinh tế thị trường", "Nâng cao chất lượng cuộc sống"],
    answer: 2
  },
  {
    id: 101,
    question: "Kết quả của cạnh tranh trong nội bộ ngành hình thành",
    options: ["giá trị thị trường.", "giá trị cá biệt hàng hóa.", "giá cả thị trường.", "giá trị hàng hóa."],
    answer: 0
  },
  {
    id: 102,
    question: "Thực chất của quan hệ cung - cầu là mối quan hệ giữa",
    options: ["doanh nghiệp với doanh nghiệp.", "nhà nước với doanh nghiệp.", "người mua với người bán.", "người kinh doanh với nhà nước."],
    answer: 2
  },
  {
    id: 103,
    question: "Năng suất lao động tăng lên 2 lần làm cho",
    options: [
      "tổng số sản phẩm giảm, tổng giá trị sản phẩm giảm xuống 1/2 lần và lượng giá trị trong một đơn vị hàng hóa không đổi.", 
      "tổng số sản phẩm giảm, tổng giá trị sản phẩm tăng lên 2 lần và lượng giá trị trong một đơn vị hàng hóa không đổi.", 
      "tổng số sản phẩm tăng, tổng giá trị sản phẩm giảm xuống 1/2 lần và lượng giá trị trong một đơn vị hàng hóa tăng lên 2 lần", 
      "tổng số sản phẩm tăng 2 lần, tổng giá trị sản phẩm không đổi và lượng giá trị trong một đơn vị hàng hóa giảm xuống 2 lần."
    ],
    answer: 3
  },
  {
    id: 104,
    question: "Loại cạnh tranh được đánh giá là động lực của nền kinh tế là",
    options: ["cạnh tranh trong nội bộ ngành.", "cạnh tranh giữa các ngành.", "cạnh tranh giữa người bán và người mua, cạnh tranh không lành mạnh.", "cạnh tranh lành mạnh."],
    answer: 3
  },
  {
    id: 105,
    question: "Yếu tố nào làm ảnh hưởng đến giá cả hàng hóa?",
    options: [
      "Giá trị sử dụng của hàng hóa, quy luật cung - cầu, quy luật cạnh tranh và giá trị của tiền tệ", 
      "Số lượng hàng hóa trên thị trường, quy luật cung - cầu, quy luật cạnh tranh và giá trị của tiền tệ.", 
      "Giá trị của hàng hóa, quy luật cung - cầu, quy luật cạnh tranh và giá trị của tiền tệ", 
      "Giá trị trao đổi của hàng hóa, quy luật cung - cầu, quy luật cạnh tranh và giá trị của tiền tệ"
    ],
    answer: 2
  },
  {
    id: 106,
    question: "Quy luật giá trị điều tiết lưu thông, có nghĩa là hàng hóa vận động từ nơi",
    options: ["có giá cao đến nơi có giá cao.", "có giá cao đến nơi có giá thấp.", "có giá thấp đến nơi có giá cao.", "có giá thấp đến nơi có giá thấp."],
    answer: 2
  },
  {
    id: 107,
    question: "Khi giá cả hàng hóa tăng lên thì cung - cầu sẽ thay đổi như thế nào?",
    options: ["Cung giảm, cầu giảm", "Cung tăng, cầu tăng", "Cung tăng, cầu giảm", "Cung giảm, cầu tăng"],
    answer: 2
  },
  {
    id: 108,
    question: "Nguồn gốc của tiền tệ là kết quả của quá trình nào?",
    options: ["Quá trình trao đổi, mua bán trên thị trường", "Quá trình phát triển của sản xuất và trao đổi hàng hóa", "Quá trình mua bán, trao đổi quốc tế", "Quá trình hình thành nhà nước"],
    answer: 1
  },
  {
    id: 109,
    question: "Lao động trừu tượng là phạm trù",
    options: ["Tư nhân", "Vĩnh viễn", "Lịch sử", "Xã hội"],
    answer: 2
  },
  {
    id: 110,
    question: "Lao động trừu tượng là nguồn gốc của",
    options: ["của cải.", "giá trị trao đổi.", "giá trị.", "giá trị cá biệt."],
    answer: 2
  },
  {
    id: 111,
    question: "Trong điều kiện nền kinh tế thị trường hiện nay, một số hàng hóa đặc biệt gồm có",
    options: [
      "thương hiệu, hàng hóa tư liệu tiêu dùng, chứng khóan và một số giấy tờ có giá khác.", 
      "quyền sử dụng đất đai, thương hiệu, chứng khóan và một số giấy tờ có giá khác.", 
      "quyền sử dụng đất đai, thương hiệu và hàng hóa tư liệu sản xuất.", 
      "quyền sử dụng đất đai, thương hiệu, chứng khóan và một số giấy tờ có giá khác, hàng hóa nông phẩm."
    ],
    answer: 1
  },
  {
    id: 112,
    question: "Các yếu tố nào cấu thành thị trường?",
    options: ["Hàng hóa, tiền tệ, người mua, người bán, pháp luật", "Hàng hóa, tiền tệ, người mua, người bán", "Hàng hóa, tiền tệ, người bán", "Hàng hóa, tiền tệ, người sản xuất"],
    answer: 1
  },
  {
    id: 113,
    question: "Người sản xuất kinh doanh thường xuyên cải tiến máy móc hiện đại và nâng cao trình độ chuyên môn cho người lao động, điều này thể hiện",
    options: ["kích thích lực lượng sản xuất phát triển.", "góp phần ổn định thị trường hàng hóa.", "khai thác tối đa mọi nguồn lực của đất nước.", "thúc đẩy tăng trưởng kinh tế, hội nhập kinh tế quốc tế."],
    answer: 0
  },
  {
    id: 114,
    question: "Giá trị của hàng hóa được xác định bởi",
    options: ["lao động trừu tượng.", "lao động phức tạp.", "lao động giản đơn.", "lao động cụ thể."],
    answer: 0
  },
  {
    id: 115,
    question: "Biểu hiện của thị trường chứng khóan là",
    options: [
      "người mua và người bán đều phải thông qua môi giới trung gian.", 
      "nơi người mua được lựa chọn và so sánh giá cả của hàng hóa.", 
      "nơi người bán quyết định giá cả, người mua chỉ được quyền chọn lựa.", 
      "nơi người mua được quyền quyết định giá cả của hàng hóa."
    ],
    answer: 0
  },
  {
    id: 116,
    question: "Khi cung = cầu thì giá cả hàng hóa như thế nào?",
    options: ["Giá cả < giá trị", "Giá cả > giá trị", "Giá cả vận động xoay quanh giá trị", "Giá cả = giá trị"],
    answer: 3
  },
  {
    id: 117,
    question: "Dựa vào căn cứ nào để phân chia thị trường hàng hóa và thị trường dịch vụ?",
    options: ["Căn cứ vào tính chuyên biệt của thị trường", "Tính chất và cơ chế vận hành của thị trường", "Đầu vào, đầu ra của quá trình sản xuất", "Đối tượng hàng hóa đưa ra trao đổi, mua bán"],
    answer: 3
  },
  {
    id: 118,
    question: "Ưu thế của sản xuất hàng hóa là",
    options: [
      "thúc đẩy năng suất lao động, phát triển lực lượng sản xuất xã hội và mở rộng giao lưu kinh tế.", 
      "thúc đẩy phân công lao động xã hội, chuyên môn hóa sản xuất và mở rộng giao lưu kinh tế.", 
      "thúc đẩy phân công lao động xã hội, năng suất lao động và mở rộng giao lưu kinh tế.", 
      "phát triển lực lượng sản xuất xã hội và mở rộng giao lưu kinh tế."
    ],
    answer: 0
  },
  {
    id: 119,
    question: "Mục đích của người sản xuất trong kinh tế hàng hóa là",
    options: ["trao đổi, mua bán.", "tăng năng suất lao động.", "tăng cường độ lao động.", "tự tiêu dùng."],
    answer: 0
  },
  {
    id: 120,
    question: "Thực hiện chức năng tiền tệ thế giới, tiền phải đáp ứng yêu cầu",
    options: [
      "đủ giá trị, tiền bạc hoặc những đồng tiền được công nhận là phương tiện thanh toán quốc tế.", 
      "có đủ giá trị, tiền vàng hoặc những đồng tiền được công nhận là phương tiện thanh toán quốc tế.", 
      "không đủ giá trị, tiền vàng hoặc những đồng tiền được công nhận là phương tiện thanh toán quốc tế.", 
      "đủ giá trị, tiền vàng hoặc những đồng tiền không được công nhận là phương tiện thanh toán quốc tế."
    ],
    answer: 1
  },
  {
    id: 121,
    question: "Khi năng suất lao động tăng lên 2 lần thì",
    options: [
      "tổng số sản phẩm và lượng giá trị trong một đơn vị hàng hóa cùng giảm xuống 2 lần.", 
      "tổng số sản phẩm tăng lên 2 lần và lượng giá trị trong một đơn vị hàng hóa cũng giảm xuống 2 lần.", 
      "tổng số sản phẩm và lượng giá trị trong một đơn vị hàng hóa cùng tăng lên 2 lần.", 
      "tổng số sản phẩm giảm xuống 2 lần và lượng giá trị trong một đơn vị hàng hóa cũng tăng lên 2 lần."
    ],
    answer: 1
  },
  {
    id: 122,
    question: "Lao động cụ thể là nguồn gốc của",
    options: ["giá trị cá biệt.", "của cải.", "giá trị trao đổi.", "giá trị."],
    answer: 1
  },
  {
    id: 123,
    question: "Biểu hiện nào thể hiện thị trường siêu thị?",
    options: [
      "Nơi người mua được lựa chọn và so sánh giá cả của hàng hóa", 
      "Nơi người mua và người bán trực tiếp thoả thuận giá cả của hàng hóa", 
      "Nơi người mua được quyền quyết định giá cả của hàng hóa", 
      "Nơi người bán quyết định giá cả, người mua chỉ được quyền chọn lựa"
    ],
    answer: 3
  },
  {
    id: 124,
    question: "Lao động giản đơn là gì?",
    options: ["Lao động không phải trải qua huấn luyện, đào tạo, lao động thành thạo", "Lao động thủ công", "Lao động trừu tượng", "Lao động xã hội cần thiết"],
    answer: 0
  },
  {
    id: 125,
    question: "Quy luật giá trị là quy luật kinh tế cơ bản của",
    options: ["chủ nghĩa xã hội.", "sản xuất hàng hóa.", "chủ nghĩa tư bản.", "mọi nền sản xuất."],
    answer: 1
  },
  {
    id: 126,
    question: "Mục đích của việc cạnh tranh giữa các ngành là",
    options: ["thu lợi nhuận tối đa.", "thu lợi nhuận độc quyền.", "tìm nơi đầu tư có lợi nhất.", "thu lợi nhuận siêu ngạch."],
    answer: 2
  },
  {
    id: 127,
    question: "Khi sản xuất và trao đổi hàng hóa phát triển đòi hỏi phải có một vật ngang giá chung xuất hiện ở hình thái nào?",
    options: ["Hình thái chung của giá trị", "Hình thái mở rộng của giá trị", "Hình thái giá trị giản đơn hay ngẫu nhiên", "Hình thái tiền tệ"],
    answer: 3
  },
  {
    id: 128,
    question: "Điểm giống nhau khi tăng năng suất lao động và cường độ lao động là gì?",
    options: ["Lượng giá trị trong một đơn vị hàng hóa không đổi", "Tổng số sản phẩm tăng", "Lượng giá trị trong một đơn vị hàng hóa tăng", "Lượng giá trị trong một đơn vị hàng hóa giảm"],
    answer: 1
  },
  {
    id: 129,
    question: "Bản chất của tiền là gì?",
    options: [
      "Là loại hàng hóa đặc biệt, làm vật ngang giá chung cho thế giới hàng hóa và phản ánh lao động xã hội", 
      "Là loại hàng hóa đặc biệt, làm vật ngang giá chung cho thế giới hàng hóa và phản ánh lao động thủ công", 
      "Là loại hàng hóa đặc biệt, làm vật ngang giá chung cho thế giới hàng hóa và phản ánh lao động tư nhân", 
      "Là loại hàng hóa đặc biệt, làm vật ngang giá chung cho thế giới hàng hóa và phản ánh lao động cá biệt"
    ],
    answer: 0
  },
  {
    id: 130,
    question: "Quy luật giá trị yêu cầu người sản xuất phải đảm bảo",
    options: [
      "hao phí lao động cá biệt lớn hơn hao phí lao động xã hội cần thiết.", 
      "hao phí lao động cá biệt bằng hao phí lao động xã hội cần thiết.", 
      "hao phí lao động cá biệt nhỏ hơn hoặc bằng hao phí lao động xã hội cần thiết.", 
      "hao phí lao động cá biệt nhỏ hơn hao phí lao động xã hội cần thiết."
    ],
    answer: 2
  },
  {
    id: 131,
    question: "Quy luật giá trị yêu cầu sản xuất và trao đổi hàng hóa phải tiến hành trên cơ sở nào?",
    options: ["Hao phí lao động xã hội cần thiết", "Hao phí lao động tư nhân", "Hao phí lao động cá biệt", "Hao phí lao động cụ thể"],
    answer: 0
  },
  {
    id: 132,
    question: "Đặc trưng phổ biến của nền kinh tế thị trường là",
    options: [
      "có sự đa dạng của các chủ thể kinh tế, nhiều hình thức sở hữu; thị trường đóng vai trò quyết định trong việc phân bổ các nguồn lực xã hội; giá cả được hình thành theo nguyên tắc thị trường; là nền kinh tế mở.", 
      "có sự đa dạng của các chủ thể kinh tế, nhiều hình thức sở hữu; thị trường đóng vai trò quyết định trong việc phân bổ các nguồn lực xã hội; giá cả được hình thành theo nguyên tắc thị trường; là nền kinh tế đóng.", 
      "có sự đa dạng của các chủ thể kinh tế, nhiều hình thức sở hữu; nhà nước đóng vai trò quyết định trong việc phân bổ các nguồn lực xã hội; giá cả được hình thành theo nguyên tắc thị trường; là nền kinh tế mở.", 
      "có sự đa dạng của các chủ thể kinh tế, nhiều hình thức sở hữu; thị trường đóng vai trò quyết định trong việc phân bổ các nguồn lực xã hội; giá cả được hình thành theo quy luật cung - cầu; là nền kinh tế mở."
    ],
    answer: 0
  },
  {
    id: 133,
    question: "Điền từ ngữ thích hợp vào chỗ chấm: Phân công lao động xã hội là sự ...(1)... lao động trong xã hội thành các ngành, lĩnh vực sản xuất ...(2)... tạo nên sự ...(3)... của những người sản xuất những ngành, nghề khác nhau.",
    options: [
      "(1) phân chia, (2) giống nhau, (3) chuyên môn hóa", 
      "(1) phân chia, (2) khác nhau, (3) hiện đại hóa", 
      "(1) phân chia, (2) khác nhau, (3) chuyên môn hóa", 
      "(1) phân chia, (2) giống nhau, (3) hiện đại hóa"
    ],
    answer: 2
  },
  {
    id: 134,
    question: "Khi năng suất lao động tăng lên thì",
    options: [
      "tổng số sản phẩm giảm và lượng giá trị trong một đơn vị hàng hóa tăng.", 
      "tổng số sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa giảm.", 
      "tổng số sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa tăng.", 
      "tổng số sản phẩm giảm và lượng giá trị trong một đơn vị hàng hóa giảm."
    ],
    answer: 1
  },
  {
    id: 135,
    question: "Vì sao C.Mác cho rằng: Các hàng hóa trao đổi được với nhau?",
    options: [
      "Đều là sản phẩm của lao động, kết tinh một lượng lao động xã hội bằng nhau", 
      "Đều có giá trị sử dụng", 
      "Đều tính đến thời gian hao phí lao động xã hội cần thiết để sản xuất", 
      "Có lượng hao phí vật tư, kĩ thuật bằng nhau"
    ],
    answer: 0
  },
  {
    id: 136,
    question: "Lao động phức tạp là",
    options: ["lao động trừu tượng.", "lao động thủ công.", "lao động trải qua huấn luyện, đào tạo, lao động thành thạo.", "lao động xã hội cần thiết."],
    answer: 2
  },
  {
    id: 137,
    question: "Giá trị hàng hóa được tạo ra từ quá trình",
    options: ["sản xuất.", "trao đổi.", "tiêu dùng.", "phân phối."],
    answer: 0
  },
  {
    id: 138,
    question: "Mặt trái của sản xuất hàng hóa là gì?",
    options: [
      "Tiềm ẩn nguy cơ khủng hoảng kinh tế, gây ô nhiễm môi trường, làm xuống cấp một số giá trị văn hóa truyền thống.", 
      "Phân hóa giàu - nghèo, tiềm ẩn nguy cơ khủng hoảng kinh tế, khai thác cạn kiệt các nguồn tài nguyên thiên nhiên", 
      "Phân hóa giàu - nghèo, tiềm ẩn nguy cơ khủng hoảng kinh tế, gây ô nhiễm môi trường", 
      "Tiềm ẩn nguy cơ khủng hoảng kinh tế, gây ô nhiễm môi trường, khai thác cạn kiệt các nguồn tài nguyên thiên nhiên"
    ],
    answer: 2
  },
  {
    id: 139,
    question: "Hàng hóa là",
    options: [
      "sản phẩm của lao động thoả mãn nhu cầu nào đó của con người.", 
      "sản phẩm của lao động, có thể thoả mãn một nhu cầu nào đó của con người thông qua trao đổi, mua bán.", 
      "sản phẩm của lao động thoả mãn nhu cầu của những người khác không thông qua trao đổi, mua bán.", 
      "sản phẩm của lao động thoả mãn nhu cầu của chính những người sản xuất ra hàng hóa."
    ],
    answer: 1
  },
  {
    id: 140,
    question: "Nhân tố nào quyết định giá trị hàng hóa?",
    options: ["Hao phí lao động của người sản xuất", "Sự khan hiếm của hàng hóa", "Giá trị sử dụng của hàng hóa", "Lao động cụ thể của người sản xuất hàng hóa"],
    answer: 0
  },
  {
    id: 141,
    question: "Tiền được dùng làm gì khi thực hiện chức năng phương tiện lưu thông",
    options: ["Nộp thuế", "Trả nợ", "Thanh toán", "Môi giới trong quá trình trao đổi hàng hóa"],
    answer: 3
  },
  {
    id: 142,
    question: "Tiền được dùng làm gì khi thực hiện chức năng tiền tệ thế giới?",
    options: ["Phương tiện mua bán", "Đo lường giá trị các hàng hóa", "Mua bán, thanh toán quốc tế", "Di chuyển của cải"],
    answer: 2
  },
  {
    id: 143,
    question: "Giá cả hàng hóa là",
    options: ["sự biểu hiện bằng tiền của giá trị hàng hóa.", "quan hệ về lượng giữa hàng và tiền.", "giá trị của hàng hóa.", "sự biểu hiện bằng tiền của giá trị sử dụng hàng hóa."],
    answer: 0
  },
  {
    id: 144,
    question: "Mục đích của cạnh tranh trong nội bộ ngành là gì?",
    options: ["Nhằm thu nhiều lợi nhuận nhất", "Đổi mới công nghệ", "Nhằm mua bán hàng hóa với giá cả có lợi nhất", "Thu được lợi nhuận siêu ngạch"],
    answer: 3
  },
  {
    id: 145,
    question: "Quy luật cung - cầu là quy luật kinh tế điều tiết quan hệ giữa",
    options: ["các chủ thể sản xuất hàng hóa với nhau.", "người bán hàng hóa với nhau.", "người tiêu dùng với nhau.", "cung và cầu hàng hóa trên thị trường."],
    answer: 3
  },
  {
    id: 146,
    question: "Việc tăng cường độ lao động làm cho",
    options: [
      "tổng số sản phẩm tăng, tổng giá trị sản phẩm giảm và lượng giá trị trong một đơn vị hàng hóa giảm.", 
      "tổng số sản phẩm được sản xuất ra tăng, tổng giá trị sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa giảm.", 
      "tổng số sản phẩm tăng, tổng giá trị sản phẩm làm ra tăng và lượng giá trị trong một đơn vị hàng hóa tăng.", 
      "tổng số sản phẩm tăng, tổng giá trị sản phẩm tăng và lượng giá trị trong một đơn vị hàng hóa không đổi."
    ],
    answer: 3
  },
  {
    id: 147,
    question: "Ưu thế của nền kinh tế thị trường là gì?",
    options: [
      "Luôn tạo động lực cho chủ thể kinh tế, phát huy tốt tiềm năng của mọi chủ thể kinh tế và tạo ra sự đa dạng các chủ thể kinh tế", 
      "Đóng vai trò quyết định trong việc phân bổ các nguồn lực và tạo ra các phương thức để thoả mãn tối đa nhu cầu của con người", 
      "Luôn tạo động lực cho chủ thể kinh tế, phát huy tốt tiềm năng của mọi chủ thể kinh tế và tạo ra các phương thức để thoả mãn tối đa nhu cầu của con người", 
      "Luôn tạo động lực cho chủ thể kinh tế, thị trường đóng vai trò quyết định trong việc phân bổ các nguồn lực và tạo ra các phương thức để thoả mãn tối đa nhu cầu của con người"
    ],
    answer: 2
  },
  {
    id: 148,
    question: "Nhân tố cơ bản, lâu dài để tăng sản phẩm cho xã hội là",
    options: ["tăng năng suất lao động.", "tăng số người lao động.", "kéo dài thời gian lao động.", "tăng cường độ lao động."],
    answer: 0
  },
  
  // ================= CHƯƠNG 3 =================

  {
    id: 149,
    question: "Phương pháp sản xuất giá trị thặng dư tương đối là",
    options: [
      "độ dài ngày lao động không đổi, thời gian lao động tất yếu tăng lên.", 
      "rút ngắn thời gian lao động tất yếu trong khi độ dài ngày lao động không đổi hoặc rút ngắn.", 
      "kéo dài ngày lao động, thời gian lao động tất yếu không thay đổi.", 
      "kéo dài ngày lao động, thời gian lao động tất yếu tăng lên."
    ],
    answer: 1
  },
  {
    id: 150,
    question: "Lợi tức là một phần của",
    options: ["lợi nhuận ngân hàng.", "lợi nhuận độc quyền.", "lợi nhuận bình quân.", "lợi nhuận siêu ngạch."],
    answer: 2
  },
  {
    id: 151,
    question: "Căn cứ để phân chia tư bản thành tư bản bất biến và tư bản khả biến là",
    options: [
      "tốc độ chu chuyển của tư bản.", 
      "phương thức chuyển giá trị các bộ phận tư bản sang sản phẩm.", 
      "vai trò của các bộ phận tư bản trong quá trình sản xuất giá trị thặng dư.", 
      "hao mòn hữu hình hoặc vô hình."
    ],
    answer: 2
  },
  {
    id: 152,
    question: "Tốc độ chu chuyển của tư bản tăng lên thì tỉ suất lợi nhuận sẽ",
    options: ["tăng lên.", "giảm xuống.", "không đổi.", "tuỳ điều kiện cụ thể."],
    answer: 0
  },
  {
    id: 153,
    question: "Ngày lao động là 8 giờ, tỉ suất giá trị thặng dư là m’ = 100%, nhà tư bản tăng ngày lao động lên 1 giờ và giá trị sức lao động giảm đi 25%. Vậy tỉ suất giá trị thặng dư mới sẽ là",
    options: ["200%.", "150%.", "300%.", "250%."],
    answer: 0
  },
  {
    id: 154,
    question: "Căn cứ để phân chia tư bản thành tư bản cố định và tư bản lưu động là",
    options: [
      "sự thay đổi về lượng trong quá trình sản xuất.", 
      "vai trò các bộ phận tư bản trong quá trình sản xuất giá trị thặng dư.", 
      "phương thức chuyển giá trị của các bộ phận tư bản sang sản phẩm.", 
      "tốc độ chu chuyển chung của tư bản."
    ],
    answer: 2
  },
  {
    id: 155,
    question: "Nhân tố nào ảnh hưởng đến tốc độ chu chuyển của tư bản?",
    options: [
      "Thời gian tồn tại của tư bản cố định trong một vòng tuần hoàn.", 
      "Thời gian lưu thông để bán hàng hóa và thu về giá trị thặng dư.", 
      "Thời gian sản xuất trong một vòng tuần hoàn", 
      "Thời gian sản xuất và thời gian lưu thông để thực hiện một vòng tuần hoàn."
    ],
    answer: 3
  },
  {
    id: 156,
    question: "Khẳng định nào không đúng khi cấu tạo hữu cơ của tư bản tăng lên?",
    options: ["v không tăng", "Phản ánh sự phát triển của lực lượng sản xuất", "v tăng tuyệt đối, giảm tương đối", "c tăng tuyệt đối và tương đối"],
    answer: 0
  },
  {
    id: 157,
    question: "Bản chất của tích luỹ tư bản là gì?",
    options: ["Biến một phần giá trị thặng dư thành tư bản", "Biến giá trị thặng dư thành tư bản khả biến nhằm mua nhiều sức lao động", "Làm tăng nguồn dự trữ về của cải", "Làm tăng tích trữ vốn tiền"],
    answer: 0
  },
  {
    id: 158,
    question: "Người được hưởng địa tô chênh lệch II là",
    options: [
      "nhà tư bản nông nghiệp được hưởng trong thời hạn thuê đất.", 
      "chủ ruộng và tư bản nông nghiệp chia nhau cùng hưởng.", 
      "nhà tư bản nông nghiệp phải trả cho chủ ruộng khi còn thuê đất.", 
      "nhà tư bản nông nghiệp được hưởng như một khoản lợi tức mà người chủ đất phải trả lại cho nhà tư bản với tư cách người đã bỏ vốn đầu tư."
    ],
    answer: 0
  },
  {
    id: 159,
    question: "Điểm giống nhau giữa tích tụ và tập trung tư bản là",
    options: ["làm tăng tổng tư bản xã hội.", "quan hệ giữa các nhà tư bản với giai cấp công nhân.", "tăng phương tiện bóc lột lao động làm thuê.", "quan hệ giữa các nhà tư bản với nhau."],
    answer: 2
  },
  {
    id: 160,
    question: "Nguyên nhân cơ bản làm cho tư bản cố định hao mòn hữu hình là",
    options: ["tăng năng suất lao động trong ngành chế tạo máy.", "ứng dụng tiến bộ khoa học - kĩ thuật mới.", "cung lớn hơn cầu về tư bản cố định.", "do sử dụng và tác động của tự nhiên gây ra."],
    answer: 3
  },
  {
    id: 161,
    question: "Tái sản xuất là gì?",
    options: ["Sự khôi phục sản xuất", "Quá trình tái chế sản phẩm", "Quá trình tái sản xuất", "Quá trình sản xuất liên tục được lặp đi lặp lại không ngừng"],
    answer: 3
  },
  {
    id: 162,
    question: "Hao mòn vô hình tư bản cố định khác hao mòn hữu hình ở chỗ",
    options: ["tuỳ thuộc vào cường độ sử dụng.", "tuỳ thuộc vào thời gian khấu hao.", "ảnh hưởng tiến bộ kĩ thuật.", "tuỳ thuộc vào tổng lượng giá trị tư bản cố định."],
    answer: 2
  },
  {
    id: 163,
    question: "Loại tư bản nào đạt tới trình độ cao của việc che lấp bản chất đích thực của nó?",
    options: ["Tư bản cho vay", "Tư bản thương nghiệp", "Tư bản công nghiệp", "Tư bản kinh doanh nông nghiệp"],
    answer: 0
  },
  {
    id: 164,
    question: "Tích tụ và tập trung tư bản có điểm nào giống nhau?",
    options: ["Có vai trò quan trọng như nhau", "Đều làm tăng quy mô tư bản cá biệt", "Có nguồn gốc trực tiếp giống nhau", "Đều làm tăng quy mô tư bản xã hội"],
    answer: 1
  },
  {
    id: 165,
    question: "Hình thức nào không phải biểu hiện của giá trị thặng dư?",
    options: ["Lợi tức", "Tiền lương", "Lợi nhuận", "Địa tô"],
    answer: 1
  },
  {
    id: 166,
    question: "Cạnh tranh giữa các ngành xảy ra khi có sự khác nhau về yếu tố nào?",
    options: ["Giá trị thặng dư siêu ngạch", "Tỉ suất lợi nhuận", "Cung - cầu các loại hàng hóa", "Lợi nhuận khác nhau"],
    answer: 1
  },
  {
    id: 167,
    question: "Dựa vào căn cứ nào để phân chia tư bản thành tư bản bất biến và tư bản khả biến?",
    options: [
      "Đặc điểm của mỗi loại tư bản", 
      "Sự chu chuyển giá trị của mỗi loại tư bản", 
      "Vai trò của từng bộ phận tư bản trong việc sản xuất ra giá trị thặng dư", 
      "Tốc độ vận động của mỗi loại tư bản"
    ],
    answer: 2
  },
  {
    id: 168,
    question: "Ý nào dưới đây không đúng về tích luỹ tư bản?",
    options: [
      "Tích luỹ tư bản là biến một phần giá trị thặng dư thành tư bản.", 
      "Động cơ của tích luỹ tư bản cũng là giá trị thặng dư.", 
      "Tích luỹ cơ bản là sự tiết kiệm tư bản.", 
      "Nguồn gốc của tích luỹ tư bản là giá trị thặng dư."
    ],
    answer: 2
  },
  {
    id: 169,
    question: "Nhân tố nào quan trọng nhất để tăng quy mô của tích luỹ tư bản?",
    options: [
      "Nâng cao trình độ khai thác sức lao động", 
      "Tăng sự tiết kiệm tiêu dùng của nhà tư bản", 
      "Tăng sự cạnh tranh giữa các nhà tư bản để có nhiều giá trị thặng dư", 
      "Nâng cao số lượng lao động xã hội"
    ],
    answer: 0
  },
  {
    id: 170,
    question: "Chủ nghĩa tư bản càng phát triển thì tỉ suất lợi nhuận có xu hướng giảm nhưng tổng lợi nhuận có xu hướng",
    options: ["giảm nhanh.", "giảm dần.", "giảm.", "tăng nhanh."],
    answer: 3
  },
  {
    id: 171,
    question: "Địa tô tuyệt đối là gì?",
    options: [
      "Phần giá trị thặng dư ngoài lợi nhuận bình quân khi canh tác trên tất cả các loại đất kể cả đất xấu nhất", 
      "Lợi nhuận siêu ngạch thu được do sản xuất trên ruộng đất tốt và trung bình", 
      "Giá trị thặng dư mà chủ ruộng đất bóc lột trực tiếp công nhân nông nghiệp", 
      "Lợi nhuận siêu ngạch thu được do đầu tư thêm các yếu tố kĩ thuật"
    ],
    answer: 0
  },
  {
    id: 172,
    question: "Khi hàng hóa bán đúng theo giá trị thì",
    options: ["p > m", "p < m", "p = 0", "p = m"],
    answer: 3
  },
  {
    id: 173,
    question: "Tư bản khả biến trong quá trình sản xuất sẽ thay đổi như thế nào về mặt lượng?",
    options: ["Không tăng lên", "Tăng lên", "Chuyển dần giá trị vào sản phẩm", "Chuyển nguyên giá trị vào sản phẩm"],
    answer: 1
  },
  {
    id: 174,
    question: "Biểu hiện của tư bản cố định là gì?",
    options: ["Giá trị tư liệu sản xuất", "Máy móc thiết bị, nhà xưởng", "Giá trị sức lao động", "Nguyên, nhiên, vật liệu"],
    answer: 1
  },
  {
    id: 175,
    question: "Chỉ tiêu phản ánh mức doanh lợi đầu tư tư bản vào một ngành kinh tế là",
    options: ["P’", "P", "Tỉ suất lợi tức", "Lợi nhuận thương nghiệp"],
    answer: 0
  },
  {
    id: 176,
    question: "Tỉ suất giá trị thặng dư biểu hiện",
    options: [
      "quy mô bóc lột của tư bản đối với lao động làm thuê.", 
      "tính chất bóc lột của tư bản đối với lao động làm thuê.", 
      "trình độ bóc lột của tư bản đối với lao động làm thuê.", 
      "phạm vi bóc lột của tư bản đối với lao động làm thuê."
    ],
    answer: 2
  },
  {
    id: 177,
    question: "Tỉ suất lợi nhuận là chỉ tiêu đánh giá",
    options: ["hiệu quả sử dụng lao động quá khứ.", "trình độ bóc lột.", "hiệu quả sử dụng vốn đầu tư.", "hiệu quả sử dụng lao động sống."],
    answer: 2
  },
  {
    id: 178,
    question: "Lợi nhuận có nguồn gốc từ",
    options: ["lao động quá khứ.", "lao động không được trả công.", "lao động cụ thể.", "lao động phức tạp."],
    answer: 1
  },
  {
    id: 179,
    question: "Địa tô chênh lệch II là",
    options: [
      "lợi nhuận siêu ngạch do sản xuất trên những ruộng đất tốt tạo ra.", 
      "lợi nhuận siêu ngạch do sản xuất trên những ruộng đất tốt và có vị trí thuận lợi.", 
      "lợi nhuận siêu ngạch do đầu tư thêm tư bản để thâm canh, làm tăng độ màu mỡ của đất tạo ra.", 
      "lợi nhuận siêu ngạch do đầu tư thêm tư bản để mở rộng diện tích canh tác tạo ra."
    ],
    answer: 2
  },
  {
    id: 180,
    question: "Tư bản là gì?",
    options: ["Là công cụ sản xuất và nguyên liệu", "Là tiền có khả năng đẻ ra tiền", "Là giá trị mang lại giá trị thặng dư", "Là tiền và máy móc thiết bị"],
    answer: 2
  },
  {
    id: 181,
    question: "Tư bản bất biến là",
    options: [
      "tư bản mà giá trị của nó không thay đổi về lượng và được chuyển nguyên sang sản phẩm.", 
      "tư bản mà giá trị của nó lớn lên trong quá trình sản xuất.", 
      "tư bản mà giá trị của nó chuyển dần vào sản phẩm qua khấu hao.", 
      "là tư bản cố định."
    ],
    answer: 0
  },
  {
    id: 182,
    question: "Tiền công trong tư bản chủ nghĩa là",
    options: ["giá trị của lao động.", "giá cả của sức lao động.", "giá trị sức lao động.", "sự trả công cho lao động."],
    answer: 1
  },
  {
    id: 183,
    question: "Tiền công trong chủ nghĩa tư bản là gì?",
    options: [
      "Số tiền mà nhà đầu tư đã trả để đổi lấy toàn bộ số lượng lao động mà người công nhân đã bỏ ra khi tiến hành sản xuất", 
      "Giá cả của hàng hóa sức lao động", 
      "Giá cả lao động cùa người công nhân làm thuê", 
      "Số tiền mà chủ tư bản đã trả công lao động cho người làm thuê"
    ],
    answer: 1
  },
  {
    id: 184,
    question: "Sự tăng lên của năng suất lao động sản xuất tư liệu lao động và sự xuất hiện của tư liệu lao động mới có năng suất cao gây ra",
    options: ["hao mòn vô hình và hao mòn hữu hình.", "hao mòn hữu hình.", "hao mòn về giá trị sử dụng.", "hao mòn vô hình."],
    answer: 3
  },
  {
    id: 185,
    question: "Phương pháp sản xuất giá trị thặng dư tuyệt đối là",
    options: ["kéo dài ngày lao động, thời gian lao động tất yếu không thay đổi.", "tiết kiệm chi phí sản xuất.", "cải tiến tổ chức quản lí.", "ứng dụng khoa học kĩ thuật hiện đại."],
    answer: 0
  },
  {
    id: 186,
    question: "Yếu tố nào dưới đây không thuộc tư bản bất biến?",
    options: ["Điện nước, nguyên liệu", "Kết cấu hạ tầng sản xuất", "Tiền lương, tiền thưởng", "Máy móc, thiết bị, nhà xưởng"],
    answer: 2
  },
  {
    id: 187,
    question: "Dựa vào căn cứ nào để phân chia tư bản thành tư bản cố định và tư bản lưu động?",
    options: [
      "Phương thức chu chuyển giá trị của tư bản sản xuất vào giá trị sản phẩm", 
      "Tốc độ chu chuyển của tư bản", 
      "Phương thức khấu hao tư bản cố định trong quá trình sản xuất", 
      "Xác định nguồn gốc của giá trị thặng dư"
    ],
    answer: 0
  },
  {
    id: 188,
    question: "Tuần hoàn của tư bản là gì?",
    options: [
      "Sự vận động liên tục từ hình thức tư bản tiền tệ sang hình thức tư bản sản xuất và tư bản hàng hóa", 
      "Sự vận động liên tục của tư bản cố định và tư bản lưu thông", 
      "Sự vận động liên tục của tư bản tiền tệ", 
      "Sự vận động liên tục qua các hình thức khác nhau để trở về hình thái ban đầu cùng với lượng giá trị thặng dư"
    ],
    answer: 3
  },
  {
    id: 189,
    question: "Tập trung tư bản là gì?",
    options: [
      "Sự tăng lên của quy mô tư bản cá biệt mà không làm tăng quy mô tư bản xã hội do hợp nhất các tư bản cá biệt vào một chỉnh thể tạo thành một tư bản cá biệt lớn hơn", 
      "Đầu tư thêm tư bản vào nhiều ngành sản xuất: đem lại nhiều lợi nhuận hơn", 
      "Tập trung sản xuất vào một xí nghiệp lớn để hạ giá thành sản phẩm, do đó thu được nhiều lợi nhuận hơn", 
      "Kết hợp nhiều xí nghiệp nhỏ thành một xí nghiệp lớn"
    ],
    answer: 0
  },
  {
    id: 190,
    question: "Khi tỉ lệ phân chia giữa tích luỹ và tiêu dùng đã được xác định thì quy mô tích luỹ phụ thuộc vào khối lượng giá trị thặng dư. Muốn tăng khối lượng m thì nhân tố quyết định là",
    options: ["chênh lệch giữa tư bản sử dụng và tư bản tiêu dùng.", "quy mô của tư bản ứng trước.", "tăng năng suất lao động.", "tăng cường bóc lột giá trị thặng dư."],
    answer: 3
  },
  {
    id: 191,
    question: "Tư bản lưu động biểu hiện thành",
    options: ["nguyên, nhiên, vật liệu và giá trị sức lao động.", "nhà xưởng.", "máy móc thiết bị.", "giá trị tư liệu sản xuất."],
    answer: 0
  },
  {
    id: 192,
    question: "Nguyên nhân nào dẫn đến sự bình quân hóa lợi nhuận?",
    options: ["Cạnh tranh trong nội bộ ngành", "Cạnh tranh giữa các khu vực", "Cạnh tranh giữa các nước", "Cạnh tranh giữa các ngành"],
    answer: 3
  },
  {
    id: 193,
    question: "Chính sách giao ruộng đất lâu dài cho người nông dân ở nước ta dựa trên cơ sở lí luận địa tô",
    options: ["độc quyền.", "tuyệt đối.", "chênh lệch I.", "chênh lệch II."],
    answer: 3
  },
  {
    id: 194,
    question: "Bản chất của lợi nhuận thương nghiệp là",
    options: [
      "một phần của giá trị thặng dư được tạo ra trong quá trình sản xuất.", 
      "lao động thặng dư của nhân viên ngành thương nghiệp tạo ra.", 
      "khoản chênh lệch giữa giá mua và giá bán.", 
      "kết quả của hoạt động đầu cơ nâng giá, bóc lột người tiêu dùng."
    ],
    answer: 0
  },
  {
    id: 195,
    question: "Trong tư bản chủ nghĩa, giá cả nông phẩm được xác định theo giá cả của nông phẩm của loại đất",
    options: ["trung bình.", "mức trung bình của các loại đất xấu.", "xấu.", "tốt."],
    answer: 2
  },
  {
    id: 196,
    question: "Khối lượng giá trị thặng dư phản ánh điều gì?",
    options: ["Quy mô bóc lột của tư bản đối với lao động làm thuê", "Trình độ bóc lột của tư bản đối với lao động làm thuê", "Tính chất bóc lột của tư bản đối với lao động làm thuê", "Phạm vi bóc lột của tư bản đối với lao động làm thuê"],
    answer: 0
  },
  {
    id: 197,
    question: "Chi phí sản xuất tư bản chủ nghĩa là",
    options: [
      "hao phí tư bản bất biến để tạo ra hàng hóa.", 
      "hao phí lao động quá khứ và phần lao động sống được trả công.", 
      "hao phí tư bản khả biến để tạo ra hàng hóa.", 
      "hao phí tư bản bất biến, tư bản khả biến và giá trị thặng dư."
    ],
    answer: 1
  },
  {
    id: 198,
    question: "Giá trị thặng dư là",
    options: [
      "giá trị bóc lột được do nhà nước tư bản trả tiền công thấp hơn giá trị sức lao động do công nhân tạo ra.", 
      "giá trị sức lao động của người công nhân làm thuê cho chủ tư bản.", 
      "bộ phận giá trị mới dôi ra ngoài giá trị sức lao động do công nhân tạo ra.", 
      "giá trị mới được tạo ra trong quá trình sản xuất hàng hóa."
    ],
    answer: 2
  },
  {
    id: 199,
    question: "Giới hạn của tỉ suất lợi tức là",
    options: [
      "thấp hơn tỉ suất lợi nhuận bình quân và lớn hơn 0.", 
      "tỉ suất lợi tức thường lớn hơn tỉ suất lợi nhuận.", 
      "tỉ suất lợi tức có khi lớn hơn, có khi lại thấp hơn tỉ suất lợi nhuận tuỳ thuộc vào quan hệ cung - cầu về vốn trên thị trường.", 
      "trong những hoàn cảnh bình thường, tỉ suất lợi tức thường ngang với tỉ suất lợi nhuận của tư bản sản xuất."
    ],
    answer: 0
  },
  {
    id: 200,
    question: "Ý nào dưới đây là đúng khi định nghĩa về tư bản?",
    options: [
      "Tư bản là giá trị đem lại giá trị thặng dư bằng cách bóc lột lao động làm thuê.", 
      "Tư bản là giá trị mang lại giá trị thặng dư.", 
      "Tư bản là tiền và tư liệu sản xuất của nhà tư bản để tạo ra giá trị thặng dư.", 
      "Tư bản là tiền đẻ ra tiền."
    ],
    answer: 1
  },
  {
    id: 201,
    question: "Tích tụ tư bản là",
    options: [
      "sự tăng thêm quy mô của tư bản cá biệt bằng cách tư bản hóa giá trị thặng dư.", 
      "kết hợp nhiều tư bản nhỏ thành một tư bản lớn hơn.", 
      "quá trình tái sản xuất mở rộng cho tư bản xã hội tăng lên.", 
      "mở rộng quy mô sản xuất của xí nghiệp để bóc lột giá trị thặng dư."
    ],
    answer: 0
  },
  {
    id: 202,
    question: "Cấu tạo hữu cơ của tư bản là gì?",
    options: ["Cấu tạo giá trị khi phản ánh sự biến đổi của cấu tạo kĩ thuật của tư bản", "Cấu tạo kĩ thuật", "Sự phân chia các yếu tố cấu thành tư bản", "Cấu tạo giá trị"],
    answer: 0
  },
  {
    id: 203,
    question: "Nhân tố quan trọng nhất để tăng năng suất lao động là",
    options: ["điều kiện tự nhiên.", "tổ chức quản lí.", "kĩ năng lao động.", "kĩ thuật công nghệ."],
    answer: 3
  },
  {
    id: 204,
    question: "Giá trị của hàng hóa sức lao động phụ thuộc vào yếu tố nào?",
    options: [
      "Năng suất lao động của ngành hay của xí nghiệp mà người có sức lao động tham gia lao động", 
      "Năng suất lao động xã hội, nhất là trong những ngành sản xuất tư liệu sinh hoạt", 
      "Năng suất lao động nhất là trong ngành sản xuất tư liệu sản xuất", 
      "Phong tục, tập quán và mức sống của vùng hay của nước sử dụng sức lao động"
    ],
    answer: 3
  },
  {
    id: 205,
    question: "Khẳng định nào dưới đây không đúng về tư bản cố định?",
    options: [
      "Tư bản cố định là điều kiện để giảm giá trị hàng hóa.", 
      "Tư bản cố định là điều kiện tăng năng suất lao động.", 
      "Tư bản cố định là bộ phận chủ yếu của tư bản bất biến.", 
      "Tư bản cố định là nguồn gốc của giá trị thặng dư."
    ],
    answer: 3
  },
  {
    id: 206,
    question: "Hai điều kiện để sức lao động trở thành hàng hóa là",
    options: [
      "sở hữu tư nhân về tư liệu sản xuất và bóc lột lao động làm thuê.", 
      "chế độ tư hữu về tư liệu sản xuất và sự phân công lao động xã hội.", 
      "người lao động được tự do về thân thể và không có đủ những tư liệu sản xuất cần thiết để tự kết hợp với sức lao động của mình để tạo ra hàng hóa.", 
      "tư liệu sản xuất tập trung trong tay một số ít người và đa số người lao động mất hết tư liệu sản xuất."
    ],
    answer: 2
  },
  {
    id: 207,
    question: "Tỉ suất lợi nhuận phản ánh điều gì?",
    options: ["Tính chất bóc lột của tư bản đối với lao động", "Phạm vi bóc lột của tư bản đối với lao động", "Trình độ bóc lột của tư bản đối với lao động", "Mức doanh lợi đầu tư tư bản"],
    answer: 3
  },
  {
    id: 208,
    question: "Tỉ suất giá trị thặng dư là chỉ tiêu đánh giá",
    options: ["hiệu quả sử dụng vốn đầu tư.", "hiệu quả sử dụng lao động sống.", "mức doanh lợi của việc đầu tư tư bản.", "hiệu quả sử dụng lao động quá khứ."],
    answer: 1
  },
  {
    id: 209,
    question: "Những dấu hiệu nào không thuộc phạm trù hao mòn hữu hình?",
    options: ["Khấu hao nhanh", "Do sử dụng", "Tác động của tự nhiên", "Giảm khả năng sử dụng"],
    answer: 0
  },
  {
    id: 210,
    question: "Yếu tố làm tăng nhanh quy mô của tư bản xã hội là",
    options: ["tập trung tư bản.", "giá trị thặng dư.", "tích tụ tư bản.", "tỉ suất giá trị thặng dư."],
    answer: 2
  },
  {
    id: 211,
    question: "Địa tô tư bản chủ nghĩa là phần còn lại sau khi khấu trừ",
    options: ["lợi nhuận bình quân.", "lợi nhuận độc quyền.", "lợi nhuận ngân hàng.", "lợi nhuận siêu ngạch."],
    answer: 0
  },
  {
    id: 212,
    question: "Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư là gì?",
    options: ["Máy móc và sức lao động đều tạo ra giá trị thặng dư.", "Máy móc là nguồn gốc của giá trị thặng dư.", "Máy móc là yếu tố quyết định tạo ra giá trị thặng dư.", "Máy móc là tiền đề vật chất cho việc tạo ra giá trị thặng dư."],
    answer: 3
  },
  {
    id: 213,
    question: "Địa tô tư bản chủ nghĩa là",
    options: [
      "sản phẩm thặng dư và cả một phần sản phẩm tất yếu do công nhân nông nghiệp tạo ra bị chủ ruộng chiếm đoạt.", 
      "một phần của giá trị thặng dư trong nông nghiệp.", 
      "một phần giá trị thặng dư mà tư bản công nghiệp trích trong lợi nhuận bình quân của mình để trả cho chủ ruộng đất."
    ],
    answer: 1
  },
  {
    id: 214,
    question: "Nguồn gốc của lợi nhuận thương nghiệp là gì?",
    options: [
      "Quay vòng vốn nhanh nên thu được lợi nhuận", 
      "Lừa đảo trong quá trình mua bán hàng hóa", 
      "Bán hàng hóa với giá cả cao hơn giá trị của bản thân hàng hóa do nắm được khâu tiêu thụ", 
      "Một phần giá trị thặng dư trả cho nhà tư bản thương nghiệp trong việc tiêu thụ hàng hóa"
    ],
    answer: 3
  },
  {
    id: 215,
    question: "Ý kiến nào dưới đây không đúng về hàng hóa sức lao động?",
    options: ["Thể hiện dưới hình thức bán chịu", "Mua bán có thời hạn", "Giá trị sử dụng quyết định giá trị", "Giá cả = giá trị mới do sức lao động tạo ra"],
    answer: 3
  },
  {
    id: 216,
    question: "Trong quá trình sản xuất giá trị thặng dư, giá trị tư liệu sản xuất đã tiêu dùng sẽ",
    options: [
      "được tái sản xuất.", 
      "được lao động cụ thể của người sản xuất hàng hóa bảo tồn và chuyển vào giá trị sản xuất của sản phẩm mới.", 
      "không được tái sản xuất.", 
      "được bù đắp."
    ],
    answer: 1
  },
  {
    id: 217,
    question: "Nguyên nhân hình thành tỉ suất lợi nhuận bình quân là?",
    options: ["Cạnh tranh giữa các ngành", "Cạnh tranh trong nội bộ ngành", "Chạy theo giá trị thặng dư", "Cạnh tranh"],
    answer: 0
  },
  {
    id: 218,
    question: "Xuất khẩu tư bản là đặc điểm của",
    options: ["sản xuất hàng hóa giản đơn.", "chủ nghĩa tư bản tự do cạnh tranh.", "chủ nghĩa tư bản.", "chủ nghĩa tư bản độc quyền."],
    answer: 3
  },
  {
    id: 219,
    question: "Phương pháp sản xuất giá trị thặng dư tương đối là gì?",
    options: [
      "Tăng cường độ lao động", 
      "Kéo dài ngày lao động, trong khi thời gian lao động tất yếu không đổi", 
      "Rút ngắn thời gian lao động tất yếu, giữ nguyên hoặc rút ngắn độ dài ngày lao động", 
      "Tăng cường độ lao động và kéo dài thời gian lao động"
    ],
    answer: 2
  },
  {
    id: 220,
    question: "Một trong những đặc điểm của tư bản cho vay là",
    options: [
      "tư bản cho vay độc lập với tư bản sản xuất và tư bản thương nghiệp.", 
      "tách rời giữa quyền sử dụng và quyền sở hữu - che giấu việc bóc lột giá trị thặng dư một cách tinh vi nhất.", 
      "từ T – T’, như vậy là không cần bóc lột giá trị thặng dư cũng có lợi tức cho nhà tư bản.", 
      "không trực tiếp thuê công nhân nên lợi tức của họ thu được không phải là do bóc lột."
    ],
    answer: 1
  },
  {
    id: 221,
    question: "Tích luỹ tư bản là",
    options: ["tăng tỉ suất giá trị thặng dư.", "kết hợp nhiều tư bản nhỏ thành tư bản lớn.", "giá trị thặng dư được tư bản hóa.", "địa tô được tư bản hóa."],
    answer: 2
  },
  {
    id: 222,
    question: "Cấu tạo hữu cơ (c/v) phản ánh",
    options: [
      "trình độ ứng dụng khoa học - kĩ thuật vào sản xuất.", 
      "sự phát triển của nền sản xuất xã hội theo chiều sâu.", 
      "mức độ bóc lột của tư bản đối với lao động làm thuê.", 
      "trình độ phát triển của quy mô sản xuất."
    ],
    answer: 0
  },
  {
    id: 223,
    question: "Nếu khối lượng giá trị thặng dư đã được xác định thì nhân tố chủ yếu ảnh hưởng đến quy mô tích luỹ tư bản là",
    options: ["lượng tư bản khả biến.", "lượng tư bản cố định.", "tỉ lệ phân chia giữa tích luỹ và tiêu dùng.", "lượng giá trị hàng hóa không đi vào tiêu dùng."],
    answer: 2
  },
  {
    id: 224,
    question: "Động lực mạnh nhất thúc đẩy các nhà tư bản đổi mới công nghệ là",
    options: ["giá trị thặng dư tương đối.", "giá trị siêu ngạch.", "giá trị thặng dư.", "giá trị tuyệt đối."],
    answer: 1
  },
  {
    id: 225,
    question: "Giá trị sử dụng hàng hóa sức lao động khác với giá trị sử dụng hàng hóa thông thường ở điểm nào?",
    options: ["Tạo ra giá trị nhiều hơn giá trị hàng hóa thông thường", "Phụ thuộc vào yếu tố lịch sử", "Phụ thuộc vào yếu tố tinh thần", "Phụ thuộc vào yếu tố tinh thần và lịch sử"],
    answer: 0
  },
  {
    id: 226,
    question: "Bản chất của tư bản là gì?",
    options: ["Tiền", "Tư liệu sản xuất", "Tư liệu lao động", "Quan hệ sản xuất xã hội"],
    answer: 3
  },
  {
    id: 227,
    question: "Vì sao sức lao động là hàng hóa đặc biệt?",
    options: [
      "Sức lao động là yếu tố quan trọng nhất của mọi nền sản xuất xã hội.", 
      "Khi sử dụng nó thì tạo ra được một lượng giá trị lớn hơn giá trị bản thân nó.", 
      "Sức lao động được mua bán trên thị trường đặc biệt.", 
      "Sức lao động là yếu tố quan trọng nhất của phương thức sản xuất tư bản chủ nghĩa."
    ],
    answer: 1
  },
  {
    id: 228,
    question: "Để sức lao động trở thành hàng hóa cần điều kiện gì?",
    options: [
      "Người lao động được tự do về thân thể và không có đủ những tư liệu sản xuất cần thiết để tự kết hợp với sức lao động của mình để tạo ra hàng hóa để bán.", 
      "Sản xuất hàng hóa phát triển tới mức có thể mua và bán người lao động trên thị trường.", 
      "Phân công lao động xã hội phát triển tới mức có một số lĩnh vực sản xuất không đủ số lượng lao động và phải thuê thêm công nhân.", 
      "Xã hội chia thành người đi bóc lột và người bị bóc lột."
    ],
    answer: 0
  },
  {
    id: 229,
    question: "Địa tô tuyệt đối là địa tô thu được",
    options: ["do đầu tư thêm tư bản.", "trên tất cả các loại mộng đất.", "chỉ ở trên mộng đất xấu nhất.", "trên mộng đất đặc biệt."],
    answer: 1
  },
  {
    id: 230,
    question: "Giá cả sản xuất bằng",
    options: [
      "giá trị hàng hóa cộng với lợi nhuận của các nhà tư bản thương nghiệp.", 
      "chi phí sản xuất cộng với lợi nhuận bình quân.", 
      "giá cả thị trường trừ đi lợi nhuận của các nhà tư bản công nghiệp.", 
      "toàn bộ chi phí bỏ ra trong quá trình sản xuất."
    ],
    answer: 1
  },
  {
    id: 231,
    question: "Thời gian của một vòng chu chuyển của tư bản bao gồm",
    options: [
      "thời gian sản xuất và thời gian lưu thông.", 
      "thời gian mua và thời gian bán.", 
      "thời gian lao động, thời gian gián đoạn và thời gian dự trữ.", 
      "thời gian sản xuất và thời gian bán hàng."
    ],
    answer: 0
  },
  {
    id: 232,
    question: "Địa tô chênh lệch I là gì?",
    options: [
      "Lợi nhuận siêu ngạch do sản xuất trên những ruộng đất có vị trí thuận lợi tạo ra", 
      "Lợi nhuận siêu ngạch do đầu tư thêm tư bản để thâm canh tạo ra", 
      "Lợi nhuận siêu ngạch do sản xuất trên ruộng đất tốt và độ màu mỡ cao, điều kiện tự nhiên thuận lợi tạo ra", 
      "Lợi nhuận siêu ngạch do sản xuất trên những ruộng đất tốt tạo ra"
    ],
    answer: 2
  },
  {
    id: 233,
    question: "Nội dung nào dưới đây không đúng khi xem xét phương pháp sản xuất giá trị thặng dư tuyệt đối?",
    options: ["Giá trị sức lao động không đổi.", "Thời gian lao động thặng dư thay đổi.", "Thời gian lao động cần thiết thay đổi.", "Ngày lao động thay đổi."],
    answer: 2
  },
  {
    id: 234,
    question: "Giải pháp quan trọng nhất để giảm thời gian sản xuất, tăng tốc độ chu chuyển của tư bản là",
    options: ["chính sách thưởng, phạt hợp lí đối với người lao động.", "sử dụng máy móc thiết bị công nghệ hiện đại.", "cải tiến, thay đổi các biện pháp tổ chức quản lí sản xuất.", "sử dụng nguồn lao động có tay nghề thành thạo."],
    answer: 1
  },
  {
    id: 235,
    question: "Lợi nhuận thương nghiệp có được là do bán hàng hóa với mức giá như thế nào so với giá trị?",
    options: ["Bằng giá trị", "Bằng chi phí sản xuất tư bản chủ nghĩa", "Cao hơn giá trị", "Thấp hơn giá trị"],
    answer: 0
  },
  {
    id: 236,
    question: "Công thức chung của tư bản là gì?",
    options: ["T-H-T", "H-T-H", "H-T-H’", "T-H-T’"],
    answer: 3
  },
  {
    id: 237,
    question: "Biện pháp nào quan trọng nhất để giảm thời gian lưu thông, tăng tốc độ chu chuyển của tư bản?",
    options: [
      "Bán hàng có khuyến mại", 
      "Sản xuất ra hàng hóa chất lượng tốt đáp ứng nhu cầu của người tiêu dùng", 
      "Tăng cường thông tin quảng cáo để kích cầu", 
      "Sản xuất ra hàng hóa có mẫu mã, hình thức đẹp"
    ],
    answer: 1
  },
  {
    id: 238,
    question: "Hàng hóa tư liệu sản xuất trong quá trình sản xuất sẽ",
    options: ["được bảo tồn không tăng thêm giá trị.", "tạo ra giá trị thặng dư.", "bị mất đi cả về giá trị và giá trị sử dụng.", "tạo ra giá trị mới."],
    answer: 0
  },
  {
    id: 239,
    question: "Địa tô chênh lệch II thu được trên loại ruộng đất nào?",
    options: ["Ruộng đất đã được đầu tư, thâm canh.", "Ruộng đất có độ màu mỡ tốt.", "Ruộng đất có độ màu mỡ trung bình.", "Ruộng đất có vị trí thuận lợi."],
    answer: 0
  },
  {
    id: 240,
    question: "Tư bản thương nghiệp là",
    options: [
      "tư bản trong lĩnh vực lưu thông hàng hóa.", 
      "tư bản dùng để mua tư liệu sản xuất và mua sức lao động của công nhân.", 
      "tư bản dưới hình thái công nghiệp.", 
      "tư bản dưới hình thái tư bản tiền tệ."
    ],
    answer: 0
  },
  {
    id: 241,
    question: "Nguồn gốc của lợi tức là gì?",
    options: [
      "Giá trị thặng dư do một loại hàng hóa đặc biệt là tiền tệ tạo ra", 
      "Do lao động thặng dư của công nhân viên ngành ngân hàng tạo ra", 
      "Một phần của giá trị thặng dư", 
      "Do tuần hoàn của tư bản tiền tệ và sinh ra theo công thức T - T’"
    ],
    answer: 2
  },
  {
    id: 242,
    question: "Cơ sở chung của giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch là",
    options: ["tăng năng suất lao động cá biệt.", "tăng năng suất lao động xã hội.", "tăng năng suất lao động.", "giảm giá trị sức lao động."],
    answer: 2
  },
  {
    id: 243,
    question: "Nhân tố dưới đây không ảnh hưởng đến tỉ suất lợi nhuận?",
    options: ["Tốc độ chu chuyển của tư bản", "Tỉ suất giá trị thặng dư", "Cạnh tranh", "Cấu tạo hữu cơ của tư bản"],
    answer: 2
  },
  {
    id: 244,
    question: "Khẳng định nào dưới đây không đúng về lợi nhuận?",
    options: [
      "Lợi nhuận là hình thức biến tướng của giá trị thặng dư.", 
      "Lợi nhuận là hình thức biểu hiện ra bên ngoài của giá trị thặng dư.", 
      "Lợi nhuận là hiệu số giữa tổng doanh thu trừ đi tổng chi phí.", 
      "Lợi nhuận là giá trị thặng dư được coi là con đẻ của tư bản ứng trước."
    ],
    answer: 2
  },
  {
    id: 245,
    question: "Lợi nhuận bình quân của các ngành khác nhau phụ thuộc vào",
    options: ["tỉ suất giá trị thặng dư.", "tư bản ứng trước.", "tỉ suất lợi nhuận bình quân.", "cấu tạo hữu cơ của tư bản."],
    answer: 1
  },
  {
    id: 246,
    question: "Lợi tức tư bản cho vay biến động theo quan hệ cung - cầu về tư bản cho vay thông qua",
    options: ["cung = cầu, lợi tức giảm.", "cung < cầu, lợi tức giảm.", "cung = cầu, lợi tức tăng.", "cung > cầu, lợi tức giảm."],
    answer: 3
  },
  {
    id: 247,
    question: "Ý nào dưới đây không đúng về sản xuất giá trị thặng dư tương đối?",
    options: ["Ngày lao động không đổi", "Tỉ suất giá trị thặng dư thay đổi", "Hạ thấp giá trị sức lao động", "Giá trị sức lao động không đổi"],
    answer: 3
  },
  {
    id: 248,
    question: "Lợi nhuận bình quân là gì?",
    options: [
      "Lợi nhuận trung bình của các nhà tư bản kinh doanh trong lĩnh vực ngân hàng", 
      "Lợi nhuận bằng nhau của những tư bản như nhau đầu tư vào các ngành khác nhau", 
      "Lợi nhuận trung bình của các nhà tư bản kinh doanh trong lĩnh vực công nghiệp", 
      "Lợi nhuận trung bình tính cho 1 đồng vốn sau khi đã trừ đi mọi chi phí"
    ],
    answer: 1
  },
  {
    id: 249,
    question: "Để tăng cường bóc lột giá trị thặng dư tương đối cần phải",
    options: [
      "cải tiến kĩ thuật, tăng năng suất lao động.", 
      "tăng năng suất lao động trong các ngành sản xuất ra tư liệu sinh hoạt.", 
      "tăng cường độ lao động trong các ngành sản xuất ra tư liệu sinh hoạt.", 
      "kéo dài thời gian lao động trong các ngành sản xuất ra tư liệu sinh hoạt."
    ],
    answer: 0
  },
  {
    id: 250,
    question: "Cạnh tranh giữa các ngành dẫn đến hình thành",
    options: ["lợi nhuận siêu ngạch.", "giá trị xã hội của hàng hóa.", "giá cả thị trường.", "lợi nhuận bình quân."],
    answer: 3
  },
  {
    id: 251,
    question: "Về mặt lượng, tư bản bất biến trong quá trình sản xuất sẽ thay đổi như thế nào?",
    options: ["Chuyển toàn bộ giá trị vào sản phẩm", "Không tăng lên", "Tăng lên", "Chuyển dần từng phần giá trị vào sản phẩm"],
    answer: 1
  },
  {
    id: 252,
    question: "Câu 1. Bản chất của chủ nghĩa tư bản độc quyền nhà nước là",
    options: [
      "sự kết hợp tổ chức độc quyền tư nhân và nhà nước tư sản.",
      "nhà nước tư sản can thiệp vào kinh tế, chi phối độc quyền.",
      "sự thoả hiệp giữa nhà nước và tổ chức độc quyền.",
      "các tổ chức độc quyền phụ thuộc vào nhà nước."
    ],
    answer: 0
  },
  {
    id: 253,
    question: "Câu 2. Trong chủ nghĩa tư bản ngày nay, trùm tài chính thống trị nền kinh tế thông qua",
    options: [
      "“chế độ uỷ nhiệm”.",
      "“chế độ tham dự”.",
      "kết hợp “chế độ tham dự” và “chế độ uỷ nhiệm”.",
      "các tố chức tài chính quốc tế."
    ],
    answer: 1
  },
  {
    id: 254,
    question: "Câu 3. Sở hữu độc quyền nhà nước là sự kết hợp của",
    options: [
      "sở hữu nhà nước và sở hữu độc quyền tư nhân.",
      "sở hữu của nhiều nước tư bản.",
      "sở hữu của nhà nước tư sản.",
      "sở hữu nhà nước và sở hữu tư nhân chủ nghĩa tư bản."
    ],
    answer: 0
  },
  {
    id: 255,
    question: "Câu 4. Khẳng định nào dưới đây là sai khi nói về vai trò tích cực của chủ nghĩa tư bản?",
    options: [
      "Chủ nghĩa tư bản thực hiện tư nhân hóa sản xuất.",
      "Chủ nghĩa tư bản chuyển nền sản xuất nhỏ thành nền sản xuất lớn hiện đại.",
      "Chủ nghĩa tư bản thúc đẩy lực lượng sản xuất phát triển nhanh chóng.",
      "Chủ nghĩa tư bản thực hiện xã hội hóa sản xuất."
    ],
    answer: 0
  },
  {
    id: 256,
    question: "Câu 5. Các hình thức liên kết của tổ chức độc quyền là",
    options: [
      "liên kết dọc và liên kết giữa các xí nghiệp ngoài độc quyền.",
      "liên kết giữa các xí nghiệp ngoài độc quyền với nhau.",
      "liên kết ngang và liên kết dọc.",
      "liên kết giữa xí nghiệp độc quyền với xí nghiệp ngoài độc quyền."
    ],
    answer: 2
  },
  {
    id: 257,
    question: "Câu 6. Yếu tố nào dưới đây không phải là nguyên nhân dẫn đến sự hình thành độc quyền?",
    options: [
      "Sự phát triển của lực lượng sản xuất",
      "Sự phát triển của hệ thống tín dụng tư bản chủ nghĩa",
      "Khủng hoảng kinh tế trong toàn bộ nền sản xuất tư bản chủ nghĩa",
      "Sự thủ tiêu cạnh tranh trong giai đoạn độc quyền"
    ],
    answer: 3
  },
  {
    id: 258,
    question: "Câu 7. Các cuộc xâm chiếm thuộc địa của các nước đế quốc diễn ra mạnh mẽ vào thời gian nào?",
    options: [
      "Cuối thế kỉ XIX - đầu thế kỉ XX",
      "Thế kỉ XIX",
      "Cuối thế kỉ XVII – đầu thế kỉ XVIII",
      "Thế kỉ XVII"
    ],
    answer: 0
  },
  {
    id: 259,
    question: "Câu 8. Độc quyền nhà nước trong chủ nghĩa tư bản hình thành nhằm",
    options: [
      "giảm bớt lợi ích của các tổ chức độc quyền tư nhân, thay đổi nền sản xuất tư bản chủ nghĩa.",
      "phục vụ lợi ích của các tổ chức độc quyền tư nhân và tiếp tục duy trì, phát triển chủ nghĩa tư bản.",
      "phục vụ lợi ích của các tổ chức ngoài độc quyền, duy trì sự phát triển của tự do cạnh tranh trong sản xuất.",
      "gia tăng lợi ích của tất cả chủ thể trong nền kinh tế, duy trì sự bình đẳng trong cạnh tranh."
    ],
    answer: 1
  },
  {
    id: 260,
    question: "Câu 9. Biểu hiện mới của tích tụ và tập trung tư bản là",
    options: [
      "sự xuất hiện của các tổ chức độc quyền: cartel, syndicate.",
      "sự xuất hiện của các tổ chức độc quyền trust, consortium.",
      "sự xuất hiện của các công ty độc quyền xuyên quốc gia bên cạnh sự phát triển của các xí nghiệp vừa và nhỏ.",
      "sự xuất hiện của các tổ chức độc quyền tư nhân, các doanh nghiệp quy mô lớn."
    ],
    answer: 2
  },
  {
    id: 261,
    question: "Câu 10. Loại cạnh tranh nào dưới đây không thể hiện sự cạnh tranh giữa các tổ chức độc quyền?",
    options: [
      "Cạnh tranh giữa các chủ thể sản xuất kinh doanh nhỏ và vừa",
      "Cạnh tranh giữa các tổ chức độc quyền với nhau",
      "Cạnh tranh giữa các tổ chức độc quyền với các doanh nghiệp ngoài độc quyền",
      "Cạnh tranh trong nội bộ các tổ chức độc quyền"
    ],
    answer: 0
  },
  {
    id: 262,
    question: "Câu 11. Cuối thế kỉ XIX đầu thế kỉ XX, nước đế quốc có thuộc địa nhiều nhất là",
    options: ["Mỹ", "Anh", "Pháp", "Nga"],
    answer: 1
  },
  {
    id: 263,
    question: "Câu 12. Yếu tố nào dưới đây không phải là nguồn gốc lợi nhuận của lợi nhuận độc quyền cao?",
    options: [
      "Lao động không công của công nhân làm việc trong các xí nghiệp ngoài độc quyền",
      "Giá trị thặng dư của các nhà tư bản vừa và nhỏ thu được",
      "Lao động của công nhân làm việc trong các xí nghiệp độc quyền",
      "Lao động thặng dư và đôi khi cả phần lao động tất yếu của những người sản xuất nhỏ, nhân dân lao động ở các nước tư bản và các nước thuộc địa và phụ thuộc"
    ],
    answer: 0
  },
  {
    id: 264,
    question: "Câu 13. Biểu hiện mới của xuất khẩu tư bản thể hiện ở đại bộ phận dòng đầu tư tư bản",
    options: [
      "từ các nước tư bản phát triển sang các nước kém phát triển.",
      "chảy qua chảy lại giữa các nước tư bản phát triển với nhau.",
      "chảy qua chảy lại giữa các nước đang phát triển với nhau.",
      "từ các nước đang phát triển sang các nước phát triển."
    ],
    answer: 1
  },
  {
    id: 265,
    question: "Câu 14. Hình thức tổ chức độc quyền trong đó các xí nghiệp tư bản lớn kí các hiệp nghị thoả thuận với nhau về giá cả, sản lượng hàng hóa, thị trường tiêu thụ, kì hạn thanh toán là",
    options: ["cartel.", "syndicate.", "trust.", "consortium."],
    answer: 0
  },
  {
    id: 266,
    question: "Câu 15. Dưới chủ nghĩa tư bản, tích tụ và tập trung sản xuất cao, biểu hiện ở",
    options: [
      "số lượng các xí nghiệp tư bản nhỏ chiếm tỉ trọng lớn trong nền kinh tế, nắm giữ và chi phối thị trường.",
      "số lượng các xí nghiệp tư bản lớn chiếm tỉ trọng lớn trong nền kinh tế, nắm giữ và chi phối thị trường.",
      "số lượng các xí nghiệp tư bản nhỏ chiếm tỉ trọng lớn trong nền kinh tế, không nắm giữ và chi phối thị trường.",
      "số lượng các xí nghiệp tư bản lớn chiếm tỉ trọng nhỏ trong nền kinh tế, nhưng nắm giữ và chi phối thị trường."
    ],
    answer: 3
  },
  {
    id: 267,
    question: "Câu 16. Concern là hình thức tổ chức độc quyền",
    options: [
      "đa ngành, gồm hàng trăm xí nghiệp có quan hệ với những ngành khác nhau và được phân bố ở nhiều nước.",
      "trong nội bộ ngành, gồm nhiều xí nghiệp có liên quan với nhau và được phân bố ở nhiều nước.",
      "đa ngành, gồm một số ít xí nghiệp có quan hệ với những ngành khác nhau và được phân bố trong một quốc gia.",
      "trong nội bộ ngành, gồm một số ít xí nghiệp có quan hệ với những ngành khác nhau và được phân bố trong một quốc gia."
    ],
    answer: 0
  },
  {
    id: 268,
    question: "Câu 17. Mục đích của syndicate là",
    options: [
      "thống nhất việc sản xuất hàng hóa để thu được lợi nhuận độc quyền cao.",
      "thống nhất việc sản xuất và tiêu thụ hàng hóa để thu được lợi nhuận theo số lượng cổ phần.",
      "thống nhất đầu mối mua và bán để mua nguyên liệu với giá rẻ, bán hàng hóa với giá đắt nhằm thu được lợi nhuận bình quân.",
      "thống nhất đầu mối mua và bán để mua nguyên liệu với giá rẻ, bán hàng hóa với giá đắt nhằm thu được lợi nhuận độc quyền cao."
    ],
    answer: 3
  },
  {
    id: 269,
    question: "Câu 18. Khẳng định nào dưới đây là sai khi nói về quan hệ cạnh tranh trong trạng thái độc quyền?",
    options: [
      "Độc quyền sinh ra từ cạnh tranh tự do.",
      "Độc quyền không thủ tiêu cạnh tranh, trái lại làm cho cạnh tranh trở nên đa dạng, gay gắt hơn.",
      "Cạnh tranh và độc quyền luôn cùng tồn tại song hành với nhau.",
      "Độc quyền thủ tiêu cạnh tranh, làm cho cạnh tranh giữa các chủ thể sản xuất trở nên bình đẳng."
    ],
    answer: 3
  },
  {
    id: 270,
    question: "Câu 19. Trong chủ nghĩa tư bản độc quyền, vì sao cạnh tranh không bị thủ tiêu?",
    options: [
      "Vì các xí nghiệp trong nội bộ tổ chức độc quyền cạnh tranh với nhau",
      "Vì cạnh tranh là quy luật khách quan của kinh tế hàng hóa",
      "Vì tổ chức độc quyền cạnh tranh với các công ty ngoài độc quyền",
      "Vì các tổ chức độc quyền cạnh tranh với nhau"
    ],
    answer: 1
  },
  {
    id: 271,
    question: "Câu 20. Mục đích của các tổ chức độc quyền là",
    options: [
      "gây thiệt hại cho các đối thủ cạnh tranh.",
      "chiếm đoạt giá trị thặng dư của người khác.",
      "khống chế thị trường.",
      "củng cố vai trò của tổ chức độc quyền."
    ],
    answer: 2
  },
  {
    id: 272,
    question: "Câu 21. Sự ra đời của tư bản tài chính là kết quả của sự phát triển",
    options: [
      "quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp.",
      "sự phát triển của thị trường tài chính.",
      "độc quyền công nghiệp.",
      "độc quyền ngân hàng."
    ],
    answer: 0
  },
  {
    id: 273,
    question: "Câu 22. Nhận định nào dưới đây là sai khi nói về giới hạn phát triển của chủ nghĩa tư bản?",
    options: [
      "Sự phân hóa giàu - nghèo trong lòng các nước tư bản và có xu hướng ngày càng sâu sắc.",
      "Chủ nghĩa tư bản đã và đang tiếp tục tham gia gây chiến tranh và xung đột ở nhiều nơi trên thế giới.",
      "Mục đích của nền sản xuất tư bản chủ nghĩa vẫn tập trung chủ yếu vì lợi ích của thiểu số giai cấp tư sản.",
      "Mục đích của nền sản xuất tư bản chủ nghĩa hiện nay tập trung chủ yếu vì lợi ích chung của tất cả các giai cấp."
    ],
    answer: 3
  },
  {
    id: 274,
    question: "Câu 23. Các xí nghiệp tư bản tham gia trust trở thành những cổ đông để",
    options: [
      "thu lợi nhuận theo số lượng cổ phần.",
      "thu lợi nhuận theo số lượng hàng hóa.",
      "thu lợi nhuận bình quân.",
      "thu lợi nhuận tối đa."
    ],
    answer: 0
  },
  {
    id: 275,
    question: "Câu 24. Lợi nhuận là gì?",
    options: [
      "Là tỉ lệ phần lãi trên tổng số tư bản",
      "Là hình thức biến tướng của giá trị thặng dư",
      "Là tiền công mà doanh nhân tự trả cho mình",
      "Là hiệu số giữa giá trị hàng hóa và chi phí sản xuất"
    ],
    answer: 1
  },
  {
    id: 276,
    question: "Câu 25. Biểu hiện mới của xuất khẩu tư bản thể hiện ở chủ thể xuất khẩu tư bản có sự thay đổi lớn, trong đó nổi bật là",
    options: [
      "sự xuất hiện nhiều chủ thể xuất khẩu tư bản từ các nước đang phát triển; các doanh nghiệp quy mô vừa và nhỏ.",
      "sự xuất hiện nhiều chủ thể xuất khẩu tư bản từ các nước phát triển; các doanh nghiệp vừa và nhỏ.",
      "các công ty xuyên quốc gia; sự xuất hiện nhiều chủ thể xuất khẩu tư bản từ các nước phát triển.",
      "các công ty xuyên quốc gia; sự xuất hiện nhiều chủ thể xuất khẩu tư bản từ các nước đang phát triển."
    ],
    answer: 2
  },
  {
    id: 277,
    question: "Câu 26. Mục đích của xuất khẩu tư bản là",
    options: [
      "nhằm thúc đẩy sản xuất và trao đổi giữa các quốc gia trong nền kinh tế thế giới.",
      "nhằm thu được giá trị thặng dư và các nguồn lợi nhuận khác ở các nước nhập khẩu tư bản.",
      "xuất khẩu hàng hóa ra nước ngoài để bán, nhằm thu được lợi nhuận cao hơn.",
      "nhằm thu được giá trị thặng dư và các nguồn lợi nhuận khác ở các nước xuất khẩu tư bản."
    ],
    answer: 1
  },
  {
    id: 278,
    question: "Câu 27. Sự ra đời của chủ nghĩa tư bản độc quyền nhà nước nhằm mục đích gì?",
    options: [
      "Phục vụ lợi ích của nhà nước tư sản",
      "Phục vụ lợi ích của chủ nghĩa tư bản",
      "Phục vụ lợi ích của tổ chức độc quyền tư nhân",
      "Phục vụ lợi ích của tổ chức độc quyền tư nhân và cứu nguy cho chủ nghĩa tư bản"
    ],
    answer: 3
  },
  {
    id: 279,
    question: "Câu 28. Độc quyền là sự liên minh giữa các doanh nghiệp lớn, có khả năng thâu tóm việc sản xuất và tiêu thụ một số loại hàng hóa, có khả năng định ra giá cả độc quyền, nhằm thu",
    options: [
      "lợi nhuận bình quân.",
      "giá trị thặng dư tuyệt đối.",
      "lợi nhuận độc quyền cao.",
      "giá trị thặng dư tương đối."
    ],
    answer: 2
  },
  {
    id: 280,
    question: "Câu 29. Hình thức đầu tư thông qua việc cho vay để thu lợi tức, mua cổ phần, cổ phiếu, trái phiếu, các giấy tờ có giá khác mà nhà đầu tư không trực tiếp tham gia quản lí hoạt động đầu tư là",
    options: [
      "đầu tư trực tiếp.",
      "viện trợ không hoàn lại.",
      "hỗ trợ phát triển chính thức.",
      "đầu tư gián tiếp."
    ],
    answer: 3
  },
  {
    id: 281,
    question: "Câu 30. Chọn phương án đúng về thứ tự từ thấp đến cao của các hình thức tổ chức độc quyền?",
    options: [
      "Cartel, syndicate, trust, consortium",
      "Syndicate, cartel, trust, consortium",
      "Cartel, consortium, syndicate, trust",
      "Trust, cartel, syndicate, consortium"
    ],
    answer: 0
  },
  {
    id: 282,
    question: "Câu 31. Mục đích chủ yếu của các conglomerate là",
    options: [
      "thu lợi nhuận từ dịch vụ cho sản xuất.",
      "thu lợi nhuận từ sản xuất.",
      "thu lợi nhuận từ kinh doanh chứng khóan.",
      "thu lợi nhuận từ sản xuất kinh doanh."
    ],
    answer: 3
  },
  {
    id: 283,
    question: "Câu 32. Sự hình thành các tổ chức độc quyền dựa trên cơ sở",
    options: [
      "sự hoàn thiện quan hệ sản xuất - tư bản chủ nghĩa.",
      "sự xuất hiện các thành tựu mới của khoa học.",
      "tích tụ tập trung sản xuất và sự ra đời của các xí nghiệp quy mô lớn.",
      "sản xuất nhỏ phân tán."
    ],
    answer: 2
  },
  {
    id: 284,
    question: "Câu 33. Ở các nước tư bản phát triển hiện nay, nguyên nhân nào dẫn đến sự xuất hiện của các doanh nghiệp vừa và nhỏ?",
    options: [
      "Các doanh nghiệp có quy mô lớn bị phá sản, các doanh nghiệp vừa và nhỏ có cơ hội nắm bắt nhu cầu của thị trường",
      "Sự tích tụ và tập trung sản xuất dẫn đến hình thành các xí nghiệp quy mô vừa và nhỏ",
      "Việc ứng dụng thành tựu khoa học và công nghệ cho phép tiêu chuẩn hóa và chuyên môn hóa sản xuất sâu, dẫn đến hình thành hệ thống gia công; các doanh nghiệp nhỏ có những thế mạnh riêng",
      "Các doanh nghiệp quy mô nhỏ có lợi thế về vốn, độc lập trong sản xuất kinh doanh"
    ],
    answer: 2
  },
  {
    id: 285,
    question: "Câu 34. Hình thức xuất khẩu tư bản để xây dựng xí nghiệp mới hoặc mua lại những xí nghiệp đang hoạt động ở nước nhận đầu tư là",
    options: [
      "đầu tư gián tiếp.",
      "viện trợ không hoàn lại.",
      "cho vay để thu lợi tức.",
      "đầu tư trực tiếp."
    ],
    answer: 3
  },
  {
    id: 286,
    question: "Câu 35. Các tổ chức độc quyền sử dụng loại giá cả nào?",
    options: [
      "Giá cả độc quyền cao",
      "Giá cả sản xuất",
      "Giá cả chính trị",
      "Giá cả độc quyền thấp"
    ],
    answer: 0
  },
  {
    id: 287,
    question: "Câu 36. Các tổ chức độc quyền áp đặt giá cả độc quyền như thế nào?",
    options: [
      "Giá cả cao khi bán và giá cả thị trường khi mua",
      "Giá cả thị trường khi bán và giá cả thấp khi mua",
      "Giá cả cao khi bán và giá cả thấp khi mua",
      "Giá cả thấp khi bán và giá cả cao khi mua"
    ],
    answer: 2
  },
  {
    id: 288,
    question: "Câu 37. Các xí nghiệp tư bản tham gia syndicate thì",
    options: [
      "độc lập cả về sản xuất và lưu thông hàng hóa.",
      "không độc lập cả về sản xuất và lưu thông hàng hóa.",
      "vẫn giữ độc lập về sản xuất, chỉ không độc lập ở khâu lưu thông hàng hóa.",
      "vẫn giữ độc lập về lưu thông hàng hóa, mất độc lập ở khâu sản xuất."
    ],
    answer: 2
  },
  {
    id: 289,
    question: "Câu 38. “Chế độ tham dự” của tư bản tài chính được thiết lập do",
    options: [
      "yêu cầu của các tổ chức độc quyền công nghiệp.",
      "số cổ phiếu khống chế nắm công ty mẹ, con, cháu.",
      "yêu cầu tổ chức của các ngân hàng.",
      "quyết định của nhà nước."
    ],
    answer: 1
  },
  {
    id: 290,
    question: "Câu 39. Xuất khẩu tư bản là đặc điểm của",
    options: [
      "chủ nghĩa tư bản tự do cạnh tranh.",
      "chủ nghĩa tư bản.",
      "các nước giàu có.",
      "chủ nghĩa tư bản độc quyền."
    ],
    answer: 3
  },
  {
    id: 291,
    question: "Câu 40. Vai trò mới của ngân hàng trong giai đoạn chủ nghĩa tư bản độc quyền là gì?",
    options: [
      "Khống chế hoạt động của nền kinh tế tư bản chủ nghĩa",
      "Trung tâm tín dụng",
      "Đầu tư tư bản",
      "Trung tâm thanh toán"
    ],
    answer: 0
  },
  {
    id: 292,
    question: "Câu 41. Khẳng định nào dưới đây là sai khi nói về cartel?",
    options: [
      "Cartel là liên minh độc quyền vững chắc.",
      "Cartel thường tan vỡ trước kì hạn.",
      "Các xí nghiệp tham gia cartel vẫn độc lập cả về sản xuất và lưu thông hàng hóa",
      "Các thành viên tham gia cartel chỉ cam kết thực hiện đúng hiệp nghị đã kí, nếu làm sai sẽ bị phạt tiền theo quy định của hiệp nghị."
    ],
    answer: 0
  },
  {
    id: 293,
    question: "Câu 42. Nhà nước tư sản đảm nhận đầu tư vào các ngành như thế nào?",
    options: [
      "Đầu tư không lớn, thu hồi vốn nhanh, lợi nhuận cao",
      "Đầu tư lớn, thu hồi vốn nhanh, lợi nhuận ít",
      "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận cao",
      "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận ít"
    ],
    answer: 3
  },
  {
    id: 294,
    question: "Câu 43. Sự ra đời của tư bản tài chính là kết quả của sự phát triển",
    options: [
      "độc quyền công nghiệp.",
      "độc quyền ngân hàng.",
      "sự phát triển của thị trường tài chính.",
      "quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền"
    ],
    answer: 3
  }
];