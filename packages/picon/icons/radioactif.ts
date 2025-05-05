import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRadioactifIcon],svg[picon-radioactif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3h2v2M2 8l2-4l2 4m2-4H4l2-4M4 4H0l2-4"></svg:path>`,
})
export class PiconRadioactifIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
