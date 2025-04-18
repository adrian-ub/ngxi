import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStockFillIcon],svg[ri-stock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.005 5.003h3v9h-3v3h-2v-3h-3v-9h3v-3h2zm10 5h3v9h-3v3h-2v-3h-3v-9h3v-3h2z"></svg:path>`,
})
export class RiStockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
