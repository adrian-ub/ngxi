import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miArrowLeftDownIcon],svg[mi-arrow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.707 6.293a1 1 0 0 1 0 1.414L9.414 16H15a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v5.586l8.293-8.293a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class MiArrowLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
