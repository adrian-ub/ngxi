import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpThinIcon],svg[ph-arrows-down-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114.83 173.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L76 198.34V48a4 4 0 0 1 8 0v150.34l25.17-25.17a4 4 0 0 1 5.66 0m96-96l-32-32a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L172 57.66V208a4 4 0 0 0 8 0V57.66l25.17 25.17a4 4 0 1 0 5.66-5.66"></svg:path>`,
})
export class PhArrowsDownUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
