import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBandcampIcon],svg[mdi-bandcamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 6l-6.5 12H2L8.5 6H22z" fill="currentColor"></svg:path>`,
})
export class MdiBandcampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
