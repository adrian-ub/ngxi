import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleLeftSignIcon],svg[marketeq-double-left-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 6.25L29.167 25l10.416 18.75"></svg:path><svg:path stroke="#306CFE" d="M20.833 6.25L10.417 25l10.416 18.75"></svg:path></svg:g>`,
})
export class MarketeqDoubleLeftSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
