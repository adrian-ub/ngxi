import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMa1x1Icon],svg[flag-ma-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c1272d" d="M512 0H0v512h512z"></svg:path><svg:path fill="none" stroke="#006233" stroke-width="12.5" d="m256 191.4l-38 116.8l99.4-72.2H194.6l99.3 72.2z"></svg:path>`,
})
export class FlagMa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
