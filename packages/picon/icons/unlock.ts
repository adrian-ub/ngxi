import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUnlockIcon],svg[picon-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v1H6v2H5V0M1 8V3h6v5"></svg:path>`,
})
export class PiconUnlockIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
