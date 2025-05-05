import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLockIcon],svg[picon-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3V0h4v3H5V1H3v2M1 8V3h6v5"></svg:path>`,
})
export class PiconLockIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
