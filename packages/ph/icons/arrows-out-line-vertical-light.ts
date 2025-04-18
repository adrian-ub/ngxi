import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsOutLineVerticalLightIcon],svg[ph-arrows-out-line-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M100.24 52.24L122 30.49V96a6 6 0 0 0 12 0V30.49l21.76 21.75a6 6 0 0 0 8.48-8.48l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48m55.52 151.52L134 225.51V160a6 6 0 0 0-12 0v65.51l-21.76-21.75a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhArrowsOutLineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
