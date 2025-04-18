import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoImageInvertedIcon],svg[entypo-image-inverted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-4.75 3.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M4 14l3.314-7.619l3.769 6.102l3.231-1.605L16 14z"></svg:path>`,
})
export class EntypoImageInvertedIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
