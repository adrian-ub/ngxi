import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStarSFillIcon],svg[ri-star-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7z"></svg:path>`,
})
export class RiStarSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
