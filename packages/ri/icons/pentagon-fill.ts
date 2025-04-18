import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPentagonFillIcon],svg[ri-pentagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .7l10.747 7.808l-4.105 12.634H5.358L1.253 8.508z"></svg:path>`,
})
export class RiPentagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
