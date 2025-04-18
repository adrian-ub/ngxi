import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8PriceTagIcon],svg[icons8-price-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 5l-.313.28L4.28 16.813l-.686.688l.687.72l9.5 9.5l.72.687l.69-.687l11.53-11.407L27 16V5zm.844 2H25v8.156L14.5 25.594L6.406 17.5zM22 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class Icons8PriceTagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
