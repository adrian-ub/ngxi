import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShoppingCartFill12Icon],svg[garden-shopping-cart-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.55 9.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.2 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m0 1a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5m-5.2 0a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5M1.7 0a.5.5 0 0 1 .398.197l.05.08l.359.722L11 1a1 1 0 0 1 .94 1.341l-.046.106l-2 4a1 1 0 0 1-.77.545L9 7H5a1 1 0 0 1-.182-.017L4.309 8H10.5a.5.5 0 0 1 .09.992L10.5 9H4.309a1 1 0 0 1-.94-1.34l.046-.107l.621-1.244l-1.93-3.862a1 1 0 0 1-.05-.116L1.39 1H.5A.5.5 0 0 1 .008.59L0 .5A.5.5 0 0 1 .41.008L.5 0z"></svg:path>`,
})
export class GardenShoppingCartFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
