import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherAwardIcon],svg[feather-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="8" r="7"></svg:circle><svg:path d="M8.21 13.89L7 23l5-3l5 3l-1.21-9.12"></svg:path></svg:g>`,
})
export class FeatherAwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
