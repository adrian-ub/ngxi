import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRuler6Icon],svg[marketeq-ruler-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m22.063 13.208l-2.959 2.959m17.688 11.77l-2.959 2.959zm-7.375-7.354l-2.938 2.938z"></svg:path><svg:path stroke="#306CFE" d="m15.087 6.247l-8.839 8.839l28.667 28.667l8.84-8.839z"></svg:path></svg:g>`,
})
export class MarketeqRuler6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
