import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='calc';
  display:any='';
  disAns='';
  equalto:any=false;
  enteredNumber:any='0';
  enteredOperator:any=null;
  operand1:any=null;
  nextNumber:any=false;
  getnum(n: any)
  {
    console.log(n);
    if(this.equalto)
    {
      this.display='';
      this.equalto=false;
      this.disAns='';
    }
    if(this.nextNumber)
    {
      this.display=this.display+String(n);
      this.enteredNumber=n;
      this.nextNumber=false;
    }
    else
    {
      if(this.enteredNumber==='0')
      {
       
        this.enteredNumber=n;
        this.display=this.display+String(n);
      }
      else
      {
        this.enteredNumber=this.enteredNumber+n;
        this.display=this.display+String(n);
        
      }
    }
    
  }
  Calculation(enteredOperator: any,operand2: any)
  {
    
      switch(enteredOperator)
      {
            case '+':
             
              this.operand1=this.operand1+operand2;
              
              return this.operand1;
            case '-':
              this.operand1=this.operand1-operand2;
              
              return this.operand1;
            case 'x':
              this.operand1=this.operand1*operand2;
             
              return this.operand1;
            case '/':
              this.operand1=this.operand1/operand2;
              
              return this.operand1;
              
             
            case '=':
              
              return operand2;
      }
      
  }
  Operation(operator:any)
  {
    console.log(operator);
    if(this.equalto)
    {
      this.display='';
      this.disAns='';
      this.equalto=false;
    }
    this.display=this.display+String(operator);
      if(this.operand1===null)
      {
          this.operand1=Number(this.enteredNumber);
      }
      else if(this.enteredOperator)
      {
        
        const res=this.Calculation(this.enteredOperator,Number(this.enteredNumber));
        
        this.enteredNumber=String(res);
        this.operand1=res;
        if(operator==='=')
        {
          // this.display='';
          this.display=this.display+String(this.operand1);
          this.equalto=true;
          this.disAns=res;
          
        }
      }
      this.nextNumber=true;
      this.enteredOperator=operator;
      console.log("this.op1"+this.operand1);
  }
  
  clear()
  {
    this.display='';
    this.enteredNumber='0';
    this.operand1=null;
    this.enteredOperator=null;
    this.nextNumber=false;
  }
  Decimal()
  {
    if(this.equalto)
    {
      this.display='';
      this.disAns='';
      this.equalto=false;
    }
    this.display=this.display+'.';
    if(!this.enteredNumber.includes('.'))
    {
    
      this.enteredNumber=this.enteredNumber+'.';
    }
  }
 
}