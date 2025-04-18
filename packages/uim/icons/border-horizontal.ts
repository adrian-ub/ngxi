import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBorderHorizontalIcon],svg[uim-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="8" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="16" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="8" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="8" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="16" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="8" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="16" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="16" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="8" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle>`,
})
export class UimBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
