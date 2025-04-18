import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleUpSignIcon],svg[marketeq-double-up-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 39.583L25 29.167L6.25 39.583"></svg:path><svg:path stroke="#306CFE" d="M43.75 20.833L25 10.417L6.25 20.833"></svg:path></svg:g>`,
})
export class MarketeqDoubleUpSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
