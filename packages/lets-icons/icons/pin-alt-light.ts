import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPinAltLightIcon],svg[lets-icons-pin-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M19.361 17c.746.456 1.139.973 1.139 1.5s-.393 1.044-1.139 1.5s-1.819.835-3.111 1.098s-2.758.402-4.25.402s-2.958-.139-4.25-.402S5.385 20.456 4.639 20S3.5 19.027 3.5 18.5s.393-1.044 1.139-1.5"></svg:path><svg:path d="M19.5 10c0 5.018-5.488 8.403-7.075 9.276a.87.87 0 0 1-.85 0C9.988 18.403 4.5 15.018 4.5 10c0-4.5 3.634-7.5 7.5-7.5c4 0 7.5 3 7.5 7.5Z"></svg:path><svg:circle cx="12" cy="10" r="3.5"></svg:circle></svg:g>`,
})
export class LetsIconsPinAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
