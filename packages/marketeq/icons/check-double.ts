import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckDoubleIcon],svg[marketeq-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m27.542 34.375l16.208-18.75"></svg:path><svg:path stroke="#306CFE" d="m6.25 24.75l8.333 9.625l16.209-18.75"></svg:path></svg:g>`,
})
export class MarketeqCheckDoubleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
