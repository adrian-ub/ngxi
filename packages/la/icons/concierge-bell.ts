import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laConciergeBellIcon],svg[la-concierge-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v2h6V6zm3 3C9.703 9 4.574 13.84 4.062 20H2v5h28v-5h-2.063C27.427 13.84 22.297 9 16 9m0 2a9.927 9.927 0 0 1 9.938 9H6.063c.492-5.086 4.71-9 9.937-9M4 22h24v1H4z"></svg:path>`,
})
export class LaConciergeBellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
