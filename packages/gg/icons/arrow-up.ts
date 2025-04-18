import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowUpIcon],svg[gg-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.657 8.962l-1.418 1.411l-3.255-3.27l-.013 13.605l-2-.002l.013-13.568l-3.23 3.215l-1.41-1.417l5.67-5.644z"></svg:path>`,
})
export class GgArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
