import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStarSLineIcon],svg[ri-star-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.865.55l-5.23 4.48l1.598 6.7zm0-2.344l2.816 1.72l-.765-3.21l2.506-2.147l-3.29-.264L12 7.708l-1.268 3.047l-3.29.264l2.507 2.147l-.766 3.21z"></svg:path>`,
})
export class RiStarSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
