import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLinesLeftThinIcon],svg[ph-arrow-fat-lines-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 76h-28V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h28a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 96h-28a4 4 0 0 0-4 4v38.34L29.66 128L116 41.66V80a4 4 0 0 0 4 4h28Zm72-92v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0m-32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowFatLinesLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
