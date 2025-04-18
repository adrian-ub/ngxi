import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDoubleDownSignIcon],svg[marketeq-double-down-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 10.417L25 20.833L6.25 10.417"></svg:path><svg:path stroke="#306CFE" d="M43.75 29.167L25 39.583L6.25 29.167"></svg:path></svg:g>`,
})
export class MarketeqDoubleDownSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
