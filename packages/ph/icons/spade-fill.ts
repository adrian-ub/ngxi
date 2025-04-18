import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpadeFillIcon],svg[ph-spade-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 136a56 56 0 0 1-83.4 48.82l11.06 36.88A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l11.06-36.88A56 56 0 0 1 24 136c0-32 17.65-62.84 51-89.27a234 234 0 0 1 49.89-30.11a7.93 7.93 0 0 1 6.16 0A234 234 0 0 1 181 46.73C214.35 73.16 232 104 232 136"></svg:path>`,
})
export class PhSpadeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
