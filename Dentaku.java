//classのあとにクラスの名前を記述し、
//そのあとの { から } までの間に、特定の処理を行う為のプログラムを集めたメソッドや、
//クラスの中で使用されるデータを補完する為のフィールドを定義する。

//class クラス名{
  //...
//}

class Dentaku{
  public static void main(String[] args){
    Dentaku dentaku = new Dentaku();
    dentaku.plus(10,5);
    dentaku.minus(9,2);
  }

  void plus(int val1, int val2){
    System.out.println(val1 + val2);
  }

  void minus(int val1, int val2){
    System.out.println(val1 - val2);
  }
}

