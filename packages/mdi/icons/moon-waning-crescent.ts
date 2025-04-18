import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMoonWaningCrescentIcon],svg[mdi-moon-waning-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12"></svg:path>`,
})
export class MdiMoonWaningCrescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
