import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyasusIcon],svg[arcticons-myasus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.371 10.64h-7.545L4.5 37.36h7.545zm16.129 0h-7.545L20.629 37.36h7.545zm0 0v26.374H33.265"></svg:path><svg:circle cx="33.265" cy="34.324" r="2.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.535 17.552v19.462"></svg:path>`,
})
export class ArcticonsMyasusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
