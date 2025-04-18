import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBloodBank11Icon],svg[maki-blood-bank-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.405 4.644h.001L5.5 1L2.593 4.644h.002A3.37 3.37 0 0 0 2 6.56a3.464 3.464 0 0 0 3.5 3.43A3.464 3.464 0 0 0 9 6.558a3.37 3.37 0 0 0-.595-1.915zM8 7H6v2H5V7H3V6h2V4h1v2h2v1z" fill="currentColor"></svg:path>`,
})
export class MakiBloodBank11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
