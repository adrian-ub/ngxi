import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaBrochureIcon],svg[gala-brochure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 16.110084,16.110084 H 160.04176 L 96.072129,64.087313"></svg:path><svg:path d="m 16.110084,16.110084 -2e-6,175.916496 h 79.962047"></svg:path><svg:path d="M 96.072132,64.087313 H 240.00381 V 240.0038 H 96.072129 l 3e-6,-175.916487"></svg:path><svg:path d="M 160.04176,16.110084 V 64.087313"></svg:path></svg:g>`,
})
export class GalaBrochureIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
