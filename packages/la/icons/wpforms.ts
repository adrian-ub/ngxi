import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWpformsIcon],svg[la-wpforms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h.535l5.065 4.3l3.4-3l3.4 3L24.465 7H25v18H7zm3.705 0h3.82L12.6 8.7zm6.77 0h3.82L19.4 8.7zM9 13v2h3v-2zm5 0v2h9v-2zm-5 4v2h3v-2zm5 0v2h9v-2zm4 4v2h5v-2z"></svg:path>`,
})
export class LaWpformsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
