import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherUnderlineIcon],svg[feather-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3v7a6 6 0 0 0 6 6a6 6 0 0 0 6-6V3M4 21h16"></svg:path>`,
})
export class FeatherUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
