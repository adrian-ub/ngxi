import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riClockwiseLineIcon],svg[ri-clockwise-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 10.586l1.828-1.829l1.415 1.415L19 14.414l-4.243-4.242l1.415-1.415L18 10.586V8a3 3 0 0 0-3-3h-4V3h4a5 5 0 0 1 5 5zM13 9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm-1 2H4v8h8z"></svg:path>`,
})
export class RiClockwiseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
