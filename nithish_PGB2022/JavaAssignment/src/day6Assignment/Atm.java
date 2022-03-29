package day6Assignment;
import java.util.*;


abstract class action{
	abstract boolean pincheck(int p);
	abstract boolean moneywithdraw(float wmoney);
	abstract boolean moneydeposit(float dmoney);
}

class Bank extends action{
	private String name;
	private int accno;
	private int age;
	private float amount;
	
	Bank(String name,int accno,int age,float amount){
		this.name=name;
		this.accno=accno;
		this.age=age;
		this.amount=amount;
	}
	public void setname(String name) {
		this.name=name;
	}
	public void setaccno(int accno) {
		this.accno=accno;
	}
	public void setage(int age) {
		this.age=age;
	}
	public void setamount(float amount) {
		this.amount=amount;
	}
	public String getname() {
		return name;
	}
	public int getaccno() {
		return accno;
	}
	public int getage() {
		return age;
	}
	public float getamount() {
		return amount;
	}
	
	public boolean pincheck(int p) {
		if(p>999 && p<10000) {
			return true;
		}
		return false;
	}
	
	public boolean moneywithdraw(float wamount) {
		if(wamount<this.amount && wamount>0) {
			this.amount-=wamount;
			return true;
		}
		return false;
	}
	
	public boolean moneydeposit(float damount) {
		if(damount>0) {
			this.amount+=damount;
			return true;
		}
		return false;
	}
	
	public String accountdetails() {
		String details;
		details="name: "+ name +"\naccno: "+ accno +"\nage: "+ age +"\namount: "+ amount ;
		return details;
	}
}


class Atm extends Bank{
	public static void main(String[] args) {
		Bank obj=new Bank("nithish",12343434,21,4566);
		Scanner sc=new Scanner(System.in);
		System.out.println("Insert card");
		System.out.print("Enter Pin: ");
		int p=sc.nextInt();
		boolean check=obj.pincheck(p);
		System.out.println(obj.accountdetails());
		if(check==true) {
			System.out.println("ATM");
			System.out.println("Choose 1 for Withdraw");
			System.out.println("Choose 2 for Deposit");
			System.out.println("Choose 3 for Check Balance");
			System.out.println("Choose 4 for EXIT");
			System.out.println("Choose the operation");
			int n=sc.nextInt();
			switch(n) {
				case 1:
					System.out.print("Enter money to withdrawn: ");
					float wmoney=sc.nextFloat();
					if(obj.moneywithdraw(wmoney)==true) {
						System.out.println("Please collect money");
					}
					else {
						System.out.println("Transaction Failure");
					}
					break;
				case 2:
					System.out.print("Enter amount to Deposit: ");
					float dmoney=sc.nextFloat();
					if(obj.moneydeposit(dmoney)==true) {
						System.out.println("Money deposited");
					}
					else {
						System.out.println("Transaction Failure");
					}
					break;
				case 3:
					System.out.println("Balance: "+obj.getamount());
					break;
				case 4:
					System.exit(0);
			  }
			
		}
		else {
			System.out.println("Incorrect Pin");
		}

	}
}

