import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSainsburysGroceriesIcon],svg[arcticons-sainsburys-groceries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.175 5.5l7.674 27.184a2.125 2.125 0 0 0 2.052 1.577h16.354c.962 0 1.804-.647 2.053-1.577l3.206-10.217c1.227-4.58-1.251-7.835-6.04-7.835h-22.72"></svg:path><svg:circle cx="20.351" cy="39.667" r="2.833" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.968" cy="39.667" r="2.833" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSainsburysGroceriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
