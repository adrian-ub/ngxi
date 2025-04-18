import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBorderOutIcon],svg[uim-border-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M5 19h14V5H5Z"></svg:path><svg:circle cx="12" cy="12" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="16" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="8" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="8" cy="12" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="16" cy="12" r="1" fill="currentColor" opacity=".5"></svg:circle>`,
})
export class UimBorderOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
