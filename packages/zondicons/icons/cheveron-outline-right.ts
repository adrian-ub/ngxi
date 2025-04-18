import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCheveronOutlineRightIcon],svg[zondicons-cheveron-outline-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0a10 10 0 1 1 0 20a10 10 0 0 1 0-20M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0m10.54.7L9 14.25l-1.41-1.41L10.4 10L7.6 7.17L9 5.76L13.24 10z"></svg:path>`,
})
export class ZondiconsCheveronOutlineRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
