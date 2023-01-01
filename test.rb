# for 変数 in 範囲、ハッシュ、配列などを指定 do
#   処理
# end

# 問題→7以上7777777以下の7の倍数を全て書き出したとき、数字「7」は何回現れるか。
# 正解→777784

def create_number(number)
  number_list = []
  for i in 1.upto(number) do
    if (i % 7 == 0 )
      number_list.append(i)
    end
  end
  return number_list.sum{|i| i.to_s.count("7")}
  # return number_list
end

puts "#{create_number(7777777)}"