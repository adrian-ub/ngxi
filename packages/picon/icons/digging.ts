import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDiggingIcon],svg[picon-digging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 4l2 4H4M3 1l1-1l1 1l-1 1M1 3l3 2v3H3V6L2 5L1 8H0m0-7l5 4V4L0 0"></svg:path>`,
})
export class PiconDiggingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
