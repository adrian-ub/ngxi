import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpLightIcon],svg[ph-arrows-down-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L74 193.51V48a6 6 0 0 1 12 0v145.51l21.76-21.75a6 6 0 0 1 8.48 0m96-96l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L170 62.49V208a6 6 0 0 0 12 0V62.49l21.76 21.75a6 6 0 0 0 8.48-8.48"></svg:path>`,
})
export class PhArrowsDownUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
