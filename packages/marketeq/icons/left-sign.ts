import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftSignIcon],svg[marketeq-left-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 43.75L29.167 25L39.583 6.25"></svg:path><svg:path stroke="#306CFE" d="M39.583 6.25h-18.75L10.417 25l10.416 18.75h18.75"></svg:path></svg:g>`,
})
export class MarketeqLeftSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
