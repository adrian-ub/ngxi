import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUserMinusIcon],svg[icomoon-free-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11.5a5.51 5.51 0 0 1 3.594-5.159A4.6 4.6 0 0 0 10 4.5C10 2.015 10 0 7 0S4 2.015 4 4.5c0 1.548.898 3.095 2 3.716v.825C2.608 9.318 0 10.985 0 13h6.208A5.5 5.5 0 0 1 6 11.5"></svg:path><svg:path fill="currentColor" d="M11.5 7a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m2.5 5H9v-1h5z"></svg:path>`,
})
export class IcomoonFreeUserMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
