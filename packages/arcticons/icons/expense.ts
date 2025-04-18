import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExpenseIcon],svg[arcticons-expense-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="30.304" height="19.602" x="8.867" y="15.444" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.91" ry="2.91" transform="rotate(-15.009 24.02 25.245)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.1 15.2c-.398-1.49.475-3 1.96-3.4l6.57-1.76c1.48-.398 3 .479 3.39 1.97"></svg:path><svg:rect width="5.871" height="4.45" x="12.354" y="23.729" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".649" ry=".649" transform="rotate(-15.009 15.289 25.954)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-dasharray="0 0 5 3" stroke-linecap="round" stroke-linejoin="round" d="m14.7 31.4l20-5.37"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsExpenseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
