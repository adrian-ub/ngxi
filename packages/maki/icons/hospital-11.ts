import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHospital11Icon],svg[maki-hospital-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 4H7V1a1.08 1.08 0 0 0-1-1H5a1.08 1.08 0 0 0-1 1v3H1a1.08 1.08 0 0 0-1 1v1a1.08 1.08 0 0 0 1 1h3v3a1.08 1.08 0 0 0 1 1h1a1.08 1.08 0 0 0 1-1V7h3a1.08 1.08 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="currentColor"></svg:path>`,
})
export class MakiHospital11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
