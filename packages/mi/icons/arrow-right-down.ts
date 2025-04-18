import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miArrowRightDownIcon],svg[mi-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.293 6.293a1 1 0 0 1 1.414 0L16 14.586V9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h5.586L6.293 7.707a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class MiArrowRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
