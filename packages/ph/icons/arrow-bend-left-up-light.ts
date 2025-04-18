import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpLightIcon],svg[ph-arrow-bend-left-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 224a6 6 0 0 1-6 6A102.12 102.12 0 0 1 98 128V46.49L60.24 84.24a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L110 46.49V128a90.1 90.1 0 0 0 90 90a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowBendLeftUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
