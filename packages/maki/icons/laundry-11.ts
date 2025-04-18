import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLaundry11Icon],svg[maki-laundry-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 0L4 2H2S1 2 1 3v7s0 1 1 1h7c1 0 1-1 1-1V1c0-1-1-1-1-1H5zm1 1h3v1H6V1zm-.5 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5z" fill="currentColor"></svg:path>`,
})
export class MakiLaundry11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
