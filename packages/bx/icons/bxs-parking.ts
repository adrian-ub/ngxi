import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsParkingIcon],svg[bx-bxs-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.5 3H5v18h4v-5h4.5c3.584 0 6.5-2.916 6.5-6.5S17.084 3 13.5 3zm0 9H9V7h4.5C14.879 7 16 8.121 16 9.5S14.879 12 13.5 12z" fill="currentColor"></svg:path>`,
})
export class BxBxsParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
