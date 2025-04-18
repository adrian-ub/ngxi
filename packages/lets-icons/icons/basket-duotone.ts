import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketDuotoneIcon],svg[lets-icons-basket-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4.413 10.609C3.69 10.127 4.03 9 4.9 9h14.2c.869 0 1.21 1.127.487 1.609a1.76 1.76 0 0 0-.74 1.08l-1.15 5.179c-.335 1.501-.502 2.252-1.05 2.692s-1.317.44-2.856.44H10.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692l-1.15-5.18a1.76 1.76 0 0 0-.74-1.08"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12 7V5m3 11.5l.5-3m-3.5 3v-3m-3 3l-.5-3"></svg:path></svg:g>`,
})
export class LetsIconsBasketDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
