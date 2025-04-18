import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phActivityLightIcon],svg[ph-activity-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 214h-.3a5.8 5.8 0 0 1-5.3-3.9L95.5 55.6l-34 74.9A6.1 6.1 0 0 1 56 134H24a6 6 0 0 1 0-12h28.1l38.4-84.5a6 6 0 0 1 11.1.4l59.1 155.2l33.9-67.8a6 6 0 0 1 5.4-3.3h32a6 6 0 0 1 0 12h-28.3l-38.3 76.7a6.2 6.2 0 0 1-5.4 3.3Z"></svg:path>`,
})
export class PhActivityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
