import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineFillIcon],svg[ph-text-a-underline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.73 120h-41.46L128 75.09ZM216 32v192a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8M76.65 167.26a8 8 0 0 0 10.61-3.91L99.89 136h56.22l12.63 27.35a8 8 0 0 0 14.52-6.7l-48-104a8 8 0 0 0-14.52 0l-48 104a8 8 0 0 0 3.91 10.61M200 192a8 8 0 0 0-8-8H64a8 8 0 0 0 0 16h128a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhTextAUnderlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
