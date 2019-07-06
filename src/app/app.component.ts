import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = '双向绑定';

  private text:string=''


  constructor(public router: Router){
    
  }
  doClick(e){
    e.target.id = 'test2'
    console.log(e.target.textContent)
    e.target.myid = 'changeEnd'
    console.log(e.target.myid)
  }

  changeInput(e){
    this.text = e.target.value
  }

  goList(){
    this.router.navigateByUrl('list')
  }

  goCart(){
    this.router.navigateByUrl('cart')
  }
  
  goHome(){
    this.router.navigateByUrl('')
  }
}
