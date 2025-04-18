import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCupcake03Icon],svg[hugeicons-cupcake-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 4a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 0c0-.5.4-1.6 2-2"></svg:path><svg:path d="M10 6c-2.209 0-4.098 2.493-2.75 4.081C5.622 9.74 4 10.946 4 12.534c0 2.952 4.662 3.374 5.28.503c.564 2.617 4.876 2.617 5.44 0c.618 2.87 5.28 2.449 5.28-.503c0-1.588-1.623-2.794-3.25-2.453C18.099 8.493 16.21 6 14 6"></svg:path><svg:path d="m6 15l1.171 4.099c.4 1.396.599 2.094 1.133 2.498C8.84 22 9.565 22 11.017 22h1.966c1.452 0 2.178 0 2.713-.403c.534-.404.734-1.102 1.133-2.498L18 15"></svg:path></svg:g>`,
})
export class HugeiconsCupcake03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
