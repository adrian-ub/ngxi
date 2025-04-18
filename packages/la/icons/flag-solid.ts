import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFlagSolidIcon],svg[la-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v24h2V19h8v3h12V8H17V5zm2 2h8v10H7zm10 3h8v10h-8z"></svg:path>`,
})
export class LaFlagSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
