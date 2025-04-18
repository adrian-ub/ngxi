import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidClothesWindbreakerIcon],svg[icon-park-solid-clothes-windbreaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 25v12m-26 0v7h26v-7m-26 0H4V18l6.125-5L17 18l7-8l7 8l6.875-5L44 18v19h-7m-26 0V25"></svg:path><svg:path fill="currentColor" d="m17 18l7-8l7 8l11-8l-2.5-6H9l-3 6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 10h5m5 0h-5m0 0l-7 8l-11-8l3-6h30.5l2.5 6l-11 8z"></svg:path></svg:g>`,
})
export class IconParkSolidClothesWindbreakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
