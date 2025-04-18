import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidImageIcon],svg[fa-solid-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48M112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56s56-25.072 56-56s-25.072-56-56-56M64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336z"></svg:path>`,
})
export class FaSolidImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
