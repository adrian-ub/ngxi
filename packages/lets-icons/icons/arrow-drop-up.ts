import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropUpIcon],svg[lets-icons-arrow-drop-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.192 9.23l3.714 4.458A.8.8 0 0 1 15.292 15H8.708a.8.8 0 0 1-.615-1.312l3.715-4.458a.25.25 0 0 1 .384 0"></svg:path>`,
})
export class LetsIconsArrowDropUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
