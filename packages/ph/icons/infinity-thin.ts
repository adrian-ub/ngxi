import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phInfinityThinIcon],svg[ph-infinity-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a52 52 0 0 1-88.77 36.77l-.17-.18L95 96.8a44 44 0 1 0 0 62.4l8.6-9.72a4 4 0 0 1 6 5.3l-8.68 9.81l-.17.18a52 52 0 1 1 0-73.54l.17.18l60 67.79a44 44 0 1 0 0-62.4l-8.6 9.72a4 4 0 0 1-6-5.3l8.68-9.81l.17-.18A52 52 0 0 1 244 128"></svg:path>`,
})
export class PhInfinityThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
