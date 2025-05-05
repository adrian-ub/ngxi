import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQuoteFilledIcon],svg[tdesign-quote-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M2.5 5H11v7.65L6.518 19H3.795l2.666-6H2.5zM13 5h8.5v7.65L17.018 19h-2.723l2.666-6H13z"></svg:path>`,
})
export class TdesignQuoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
