import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContrastDropFillIcon],svg[ri-contrast-drop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .269l6.364 6.364a9 9 0 1 1-12.728 0zm0 2.828l-4.95 4.95a7 7 0 0 0 4.954 11.95z"></svg:path>`,
})
export class RiContrastDropFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
