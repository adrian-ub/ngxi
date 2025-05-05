import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBacklightIcon],svg[picon-backlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5V3h2v2M3 5V3h2v2M3 2V0h1v1M0 4V3h2L1 4M0 1V0l2 2H1"></svg:path>`,
})
export class PiconBacklightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
