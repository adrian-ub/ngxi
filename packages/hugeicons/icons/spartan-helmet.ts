import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpartanHelmetIcon],svg[hugeicons-spartan-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.538 15.094C2.888 8.61 5.996 4.564 12 2c6.005 2.563 9.112 6.61 7.462 13.094c-.12.47-.104.969.072 1.42l1.376 3.524c.535 1.371-1.444 1.697-2.285 1.874c-2.314.487-4.558-1.101-4.932-3.492c-.264-1.687.69-1.964 1.938-2.603c0 0 1.556-.531 1.556-2.126c0-1.174-.93-2.125-2.075-2.125c-.718 0-1.35.208-1.977.886c-.608.657-.912.985-1.135.985s-.527-.328-1.134-.985c-.628-.678-1.26-.886-1.978-.886c-1.146 0-2.075.951-2.075 2.125c0 1.595 1.556 2.126 1.556 2.126c1.248.639 2.202.916 1.938 2.603c-.374 2.39-2.618 3.98-4.932 3.492c-.841-.177-2.82-.503-2.284-1.874l1.375-3.524c.176-.451.191-.95.072-1.42M10 20h4M12 8h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsSpartanHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
