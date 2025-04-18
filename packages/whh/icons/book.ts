import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBookIcon],svg[whh-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.338 192q27 0 45.5 18.5t18.5 45.5v640q0 49-66.5 88.5t-125.5 39.5h-576q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h704q26 0 45 19t19 45.5t-19 45t-45 18.5h-672q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h224v288q0 12 11 22t21 10l96-96l96 96q10 0 21-10t11-22V192z"></svg:path>`,
})
export class WhhBookIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
