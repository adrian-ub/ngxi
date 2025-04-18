import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHelpIcon],svg[ci-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.195 8.765A4 4 0 1 1 12 14v1m.05 4v.1h-.1V19z"></svg:path>`,
})
export class CiHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
