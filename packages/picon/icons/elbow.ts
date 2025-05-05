import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconElbowIcon],svg[picon-elbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V6h2v2M0 2V0h2v2m1 0L2 1h3v5l1 1H4V2"></svg:path>`,
})
export class PiconElbowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
