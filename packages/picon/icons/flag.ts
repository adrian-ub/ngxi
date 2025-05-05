import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFlagIcon],svg[picon-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V0c6 0 0 1 6 1v5c-6 0-.5-1-5-1v3"></svg:path>`,
})
export class PiconFlagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
