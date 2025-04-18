import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBakeryDiningIcon],svg[ic-sharp-bakery-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.36 7.58l-.86 9.41H17l3.16-7.89zM3.84 9.1L7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24l-1.81 4.5l1.95.96l2.06-1.22zM1.48 16.99l2.06 1.22l1.95-.96l-1.81-4.5z"></svg:path>`,
})
export class IcSharpBakeryDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
