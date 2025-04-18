import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsBandcampIcon],svg[fa-brands-bandcamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m48.2 326.1h-181L207.9 178h181Z"></svg:path>`,
})
export class FaBrandsBandcampIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
