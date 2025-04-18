import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesRightThinIcon],svg[ph-arrow-fat-lines-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 125.17l-96-96A4 4 0 0 0 132 32v44h-28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h28v44a4 4 0 0 0 2.47 3.7a4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4h-28V84h28a4 4 0 0 0 4-4V41.66L226.34 128ZM44 80v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0m32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowFatLinesRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
