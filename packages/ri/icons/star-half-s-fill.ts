import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStarHalfSFillIcon],svg[ri-star-half-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.656l2.816 1.72l-.765-3.21l2.506-2.147l-3.29-.264L12 7.708zM12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7z"></svg:path>`,
})
export class RiStarHalfSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
