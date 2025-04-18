import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiParking11Icon],svg[maki-parking-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.1 6.1a3.53 3.53 0 0 1-2.29.66H3.9V10H2V1h3.93a3.2 3.2 0 0 1 2.16.69a2.69 2.69 0 0 1 .81 2.16a2.76 2.76 0 0 1-.8 2.25zM6.64 2.86a1.56 1.56 0 0 0-1-.3H3.9v2.65h1.72a1.48 1.48 0 0 0 1-.32a1.31 1.31 0 0 0 .36-1a1.23 1.23 0 0 0-.34-1.03z" fill="currentColor"></svg:path>`,
})
export class MakiParking11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
