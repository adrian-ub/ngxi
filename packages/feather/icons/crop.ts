import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherCropIcon],svg[feather-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></svg:path><svg:path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></svg:path></svg:g>`,
})
export class FeatherCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
