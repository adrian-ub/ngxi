import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRightSignIcon],svg[marketeq-right-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M10.417 6.25L20.833 25L10.417 43.75"></svg:path><svg:path stroke="#306CFE" d="M10.417 43.75h18.75L39.583 25L29.167 6.25h-18.75"></svg:path></svg:g>`,
})
export class MarketeqRightSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
