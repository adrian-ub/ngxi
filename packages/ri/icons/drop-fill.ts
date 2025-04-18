import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDropFillIcon],svg[ri-drop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.636 6.633L12 .269l6.364 6.364a9 9 0 1 1-12.728 0"></svg:path>`,
})
export class RiDropFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
