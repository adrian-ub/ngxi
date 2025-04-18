import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMedusaIconIcon],svg[logos-medusa-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosMedusaIcon0" x1="-66.697%" x2="108.63%" y1="81.87%" y2="34.419%"><svg:stop offset="26.563%" stop-color="#592EE1"></svg:stop><svg:stop offset="100%" stop-color="#B836D9"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosMedusaIcon0)" d="M223.517 44.823L161.174 8.85a65.57 65.57 0 0 0-65.792 0l-62.63 35.973C12.642 56.623 0 78.495 0 101.806v72.235c0 23.6 12.641 45.183 32.752 56.982l62.343 36.263a65.57 65.57 0 0 0 65.791 0l62.343-36.263c20.399-11.799 32.752-33.383 32.752-56.982v-72.235c.575-23.311-12.066-45.183-32.464-56.983m-95.383 157.422c-35.337 0-64.067-28.78-64.067-64.177c0-35.399 28.73-64.178 64.067-64.178c35.338 0 64.355 28.779 64.355 64.178s-28.73 64.177-64.355 64.177"></svg:path>`,
})
export class LogosMedusaIconIcon {
  readonly viewBox = input("0 0 256 277")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
