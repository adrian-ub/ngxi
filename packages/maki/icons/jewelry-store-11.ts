import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiJewelryStore11Icon],svg[maki-jewelry-store-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.574 3.694l-.851.639A2.492 2.492 0 0 1 8 6.5C8 7.878 6.878 9 5.5 9S3 7.878 3 6.5c0-.932.519-1.737 1.277-2.167l-.851-.639A3.485 3.485 0 0 0 2 6.5a3.5 3.5 0 1 0 7 0a3.485 3.485 0 0 0-1.426-2.806zM7.5 2.5L6.5 1h-2l-1 1.5l2 1.5l2-1.5z" fill="currentColor"></svg:path>`,
})
export class MakiJewelryStore11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
