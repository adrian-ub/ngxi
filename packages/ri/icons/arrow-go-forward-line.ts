import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowGoForwardLineIcon],svg[ri-arrow-go-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.172 7H11a6 6 0 0 0 0 12h9v2h-9a8 8 0 0 1 0-16h7.172l-2.536-2.536L17.05 1.05L22 6l-4.95 4.95l-1.414-1.415z"></svg:path>`,
})
export class RiArrowGoForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
