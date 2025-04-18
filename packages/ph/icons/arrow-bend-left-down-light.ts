import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownLightIcon],svg[ph-arrow-bend-left-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 32a6 6 0 0 1-6 6a90.1 90.1 0 0 0-90 90v81.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L98 209.51V128A102.12 102.12 0 0 1 200 26a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhArrowBendLeftDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
