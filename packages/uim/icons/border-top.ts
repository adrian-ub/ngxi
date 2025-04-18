import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBorderTopIcon],svg[uim-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4.5H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2"></svg:path><svg:circle cx="12" cy="7.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="11.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="15.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="7.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="11.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="15.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="20" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="16" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="8" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="16" cy="11.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="8" cy="11.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="7.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="11.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="15.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="4" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle>`,
})
export class UimBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
