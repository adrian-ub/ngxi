import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothDuotoneIcon],svg[ph-wave-sawtooth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 64v64H24Zm104 64H128v64Z" opacity=".2"></svg:path><svg:path d="m236.19 134.81l-104 64A8 8 0 0 1 120 192V78.32l-91.81 56.49a8 8 0 0 1-8.38-13.62l104-64A8 8 0 0 1 136 64v113.68l91.81-56.49a8 8 0 0 1 8.38 13.62"></svg:path></svg:g>`,
})
export class PhWaveSawtoothDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
