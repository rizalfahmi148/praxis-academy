PERULANGAN 'FOR & WHILE'

*Pengulangan pemrograman ada 2 jenis 'for & while'

-For
  -for adalah perulangan yang digunakan unuk mengeksekusi perintah program yang sama dengan jumalah proses perulangan yang sudah diketahui pada kondisi yang sudah ditetapkan.
  contoh perulangan for :
  package perulangan;
  public class perulangan_for {
     public static void main(String[] args) {
         for (int i=1;i<=10;i++){
             System.out.print(i+", ");
         }  
    } 
}

 Pada program diatas pada perulangan for untuk parameter pertama kita lakukan inisialisasi nilai awal variabel i=1. kemudian kita membuat kondisi i<=10. pada bagian modifier kita melakukan penambahan (increment) nilai i++. Artinya bahwa ketika kondisi bernilai benar nilai i akan ditambahkan 1 begitu seterusnya hingga kondisi bernilai false.
 
 -While
  -While adalah jenis perulangan yang digunakan ketika kita belum mengetahui jumlah proses perulangan. Berbeda dengan For yang sudah dapat kita ketahui jumlah proses perulangan dari kondisi yang ditetapkan.
  contoh:
  package perulangan;
  import java.util.Scanner;
  public class perulangan_while {
     public static void main(String[] args) {

       Scanner input=new Scanner(System.in);
       int bilangan=1;

        while (bilangan!=0){
            System.out.print("Masukkan Bilangan 0 : ");
            bilangan=input.nextInt();
        }     
    } 
 }
 Pada contoh program diatas kita menggunakan fungsi scanner untuk pengguna dapat menginput nilai saat program sedang berjalan.
 Terdapat variabel bilangan dengan tipe data integer dan nilai awal adalah 1. Kemudian ada perulangan while dengan kondisi bilangan!=0 syarat ini berarti jika nilai yang terdapat di dalam variabel bilangan isi-nya bukan 0 maka perulangan akan terus dilakukan sampai variabel bilangan harus berisi nilai 0. Perulangan dilakukan dengan mencetak kalimat “Masukan Bilangan 0 : ” dimana user akan memasukan bilangan, selama bilangan yang dimasukan oleh pengguna bukanlah 0 program ini akan terus diulang-ulang. Program akan berhenti ketika pengguna mamasukan bilangan 0.

 -Kesimpulan
Dari pembahasan kali ini mengenai perulangan for dan while pada bahasa pemrograman java, dapat saya simpulkan bahwa ketiga bentuk perulangan tersebut dapat digunakan sesuai dengan kondisi masing-masing. Jika kalian ingin melakukan perintah perulangan yang sudah diketahui jumlah proses perulangannya sebaiknya menggunakan for, dan bila melakukan perulangan dengan perbandingan nilai bisa menggunakan perulangan while.

