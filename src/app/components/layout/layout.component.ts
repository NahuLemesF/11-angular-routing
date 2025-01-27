import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, AsideComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public isAnimating = false;

  animateTransition(): void {
    this.isAnimating = true;

    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }
}
