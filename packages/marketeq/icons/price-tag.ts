import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPriceTagIcon],svg[marketeq-price-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M34.27 15.625h.21"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M43.75 20.833v-12.5a2.083 2.083 0 0 0-2.083-2.083h-12.5l-21.5 21.375a2.083 2.083 0 0 0 0 2.938l11.791 11.791a2.084 2.084 0 0 0 2.938 0z"></svg:path></svg:g>`,
})
export class MarketeqPriceTagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
