import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBorderLeftIcon],svg[uim-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1"></svg:path><svg:circle cx="7.5" cy="12" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="11.5" cy="12" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="15.5" cy="12" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="12" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="7.5" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="11.5" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="15.5" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="4" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="8" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="16" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="11.5" cy="8" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="11.5" cy="16" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="7.5" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="11.5" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="15.5" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="20" r="1" fill="currentColor" opacity=".5"></svg:circle>`,
})
export class UimBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
