import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyoxideIcon],svg[arcticons-keyoxide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.038" cy="9.886" r="1.363" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="25.188" cy="6.478" r=".977" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.288" cy="5.153" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.75 34.862l-8.498-6.356l8.498-6.355a4.85 4.85 0 0 0 .979-6.79a5 5 0 0 0-.36-.42a1.646 1.646 0 1 0-2.099-1.292a4.9 4.9 0 0 0-1.951-.185a2.594 2.594 0 1 0-2.729 1.18l-5.585 4.177v-.555a4.85 4.85 0 1 0-9.7 0v20.48a4.85 4.85 0 1 0 9.7 0v-.554l5.935 4.438a4.85 4.85 0 1 0 5.81-7.768"></svg:path>`,
})
export class ArcticonsKeyoxideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
