import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOpenMultipleOutlineIcon],svg[mdi-email-open-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v14h18v2H2c-1.105 0-2-.89-2-2V8zm21.03-1.71L14 .64L4.97 6.29C4.39 6.64 4 7.27 4 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.73-.39-1.36-.97-1.71M22 18H6v-8l8 5l8-5zm-8-5L6 8l8-5l8 5z"></svg:path>`,
})
export class MdiEmailOpenMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
