import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorRectangleSelection02Icon],svg[hugeicons-cursor-rectangle-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.31 9.378C10.8 7.773 22.01 11.705 22 13.14c-.01 1.628-4.378 2.128-5.588 2.468c-.728.204-.923.414-1.09 1.177c-.761 3.457-1.143 5.176-2.012 5.215c-1.387.061-5.455-11.055-4-12.622M2 9.2v3.6M12.8 2H9.2M7.5 20h1M20 7.5v1M2.133 4.699c.155-.727.415-1.274.854-1.712c.426-.426.954-.684 1.652-.84m15.228 2.552c-.155-.727-.415-1.274-.854-1.712c-.417-.417-.932-.673-1.608-.83M4.64 19.853c-.698-.156-1.226-.414-1.652-.84c-.43-.43-.69-.965-.845-1.673" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorRectangleSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
