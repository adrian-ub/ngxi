import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGemBIcon],svg[mage-gem-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.612 10.819l-5.737-7.88a1.06 1.06 0 0 0-.382-.323a1.1 1.1 0 0 0-.986 0a1.06 1.06 0 0 0-.381.323l-5.738 7.88A2 2 0 0 0 5 11.999c0 .422.135.834.388 1.18l5.738 7.88c.098.135.229.246.38.322a1.1 1.1 0 0 0 .987 0c.152-.076.283-.187.381-.322l5.738-7.88c.253-.346.388-.758.388-1.18a2 2 0 0 0-.388-1.18"></svg:path><svg:path d="M5.015 12.194L12 15.077l6.985-2.883M12 21.5v-6.423"></svg:path></svg:g>`,
})
export class MageGemBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
