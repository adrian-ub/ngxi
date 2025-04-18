import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookOffOutlineIcon],svg[mdi-book-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 14.8l-2 2V4a2 2 0 0 1 2-2h12c.24 0 .47.04.68.12L16.8 4H13v3.8L10.79 10l-.29-.25L8 12V4H6zM22.89 3L20 5.89V20c0 1.11-.89 2-2 2H6c-.58 0-1.1-.25-1.46-.65l-1.38 1.38l-1.27-1.27L21.61 1.73zM18 7.89l-12 12V20h12z"></svg:path>`,
})
export class MdiBookOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
