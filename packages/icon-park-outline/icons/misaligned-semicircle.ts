import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMisalignedSemicircleIcon],svg[icon-park-outline-misaligned-semicircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 30c-6.627 0-12-5.373-12-12S13.373 6 20 6"></svg:path><svg:path d="M20 22a4 4 0 0 1 0-8m8 20a4 4 0 0 0 0-8"></svg:path><svg:path d="M28 42c6.627 0 12-5.373 12-12s-5.373-12-12-12"></svg:path></svg:g>`,
})
export class IconParkOutlineMisalignedSemicircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
