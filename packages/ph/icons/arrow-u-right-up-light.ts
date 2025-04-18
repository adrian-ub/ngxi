import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightUpLightIcon],svg[ph-arrow-u-right-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.24 84.24a6 6 0 0 1-8.48 0L174 46.49V168a62 62 0 0 1-124 0V80a6 6 0 0 1 12 0v88a50 50 0 0 0 100 0V46.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowURightUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
