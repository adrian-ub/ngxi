import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowSmallUpIcon],svg[codicon-arrow-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.5L7.5 4h.7l2.5 2.5l-.7.71l-1.65-1.64v5.57h-1V5.57L5.7 7.22z"></svg:path>`,
})
export class CodiconArrowSmallUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
