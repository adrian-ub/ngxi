import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesDressClothingDressSkirtWomenIcon],svg[streamline-shopping-catergories-dress-clothing-dress-skirt-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 3.5L11 5l2-2L10.5.5h-7L1 3l2 2l1.5-1.5V7c0 1.35-1.62 2.3-1.94 5.4a1 1 0 0 0 .25.77a1 1 0 0 0 .74.33h6.9a1 1 0 0 0 .74-.33a1 1 0 0 0 .25-.77C11.12 9.3 9.5 8.35 9.5 7Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.25a6.47 6.47 0 0 0 5 0"></svg:path>`,
})
export class StreamlineShoppingCatergoriesDressClothingDressSkirtWomenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
