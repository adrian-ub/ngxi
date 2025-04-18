import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltDuotoneIcon],svg[ph-seatbelt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M92 68a36 36 0 1 1 36 36a36 36 0 0 1-36-36m36 52a72 72 0 0 0-72 72v32h144v-32a72 72 0 0 0-72-72" opacity=".2"></svg:path><svg:path d="M172 68a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m80 128a8 8 0 0 1-8 8H56a8 8 0 0 1-5.29-14l98.07-86.54a64 64 0 0 0-84 50.33A8 8 0 0 1 49 179.25a80 80 0 0 1 113.16-59.59L186.71 98a8 8 0 0 1 10.58 12L77.16 216H200a8 8 0 0 1 8 8m-14.27-77.62A79.6 79.6 0 0 1 208 192a8 8 0 0 1-16 0a63.67 63.67 0 0 0-11.41-36.49a8 8 0 0 1 13.14-9.13"></svg:path></svg:g>`,
})
export class PhSeatbeltDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
