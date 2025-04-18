import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEmptyThinIcon],svg[ph-empty-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192.76 62.72l18.2-20a4 4 0 0 0-5.96-5.41l-18.2 20a92 92 0 0 0-123.6 136l-18.2 20a4 4 0 1 0 6 5.38l18.2-20A92 92 0 0 0 192.76 62.72M44 128a84 84 0 0 1 137.46-64.75L68.63 187.36A83.72 83.72 0 0 1 44 128m84 84a83.64 83.64 0 0 1-53.46-19.25L187.37 68.64A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhEmptyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
