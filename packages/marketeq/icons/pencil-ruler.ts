import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPencilRulerIcon],svg[marketeq-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.146 9.77l-2.917-2.916a2.083 2.083 0 0 0-2.916 0l-10.23 10.23v5.833h5.834l10.229-10.23a2.083 2.083 0 0 0 0-2.916"></svg:path><svg:path stroke="#306CFE" d="M14.583 6.25v37.5H6.25V6.25zm25 29.167h-25v8.333h25z"></svg:path></svg:g>`,
})
export class MarketeqPencilRulerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
