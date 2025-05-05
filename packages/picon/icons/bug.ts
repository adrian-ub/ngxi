import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBugIcon],svg[picon-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5V4h8v1M0 8V6h8v2L7 7H1m7-7v3H0V0l1 2h6M3 8C1 8 1 0 4 0s3 8 1 8"></svg:path>`,
})
export class PiconBugIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
