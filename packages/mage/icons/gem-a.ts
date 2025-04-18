import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGemAIcon],svg[mage-gem-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.612 10.82l-5.737-7.879a1.06 1.06 0 0 0-.382-.322a1.1 1.1 0 0 0-.986 0a1.06 1.06 0 0 0-.381.322l-5.738 7.88A2 2 0 0 0 5 12c0 .422.135.834.388 1.18l5.738 7.879c.098.135.229.246.38.322a1.1 1.1 0 0 0 .987 0c.152-.076.283-.187.381-.322l5.738-7.88a1.99 1.99 0 0 0 0-2.359"></svg:path><svg:path d="M5.015 12.195L12 15.078l6.985-2.883M12 2.5v19"></svg:path></svg:g>`,
})
export class MageGemAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
