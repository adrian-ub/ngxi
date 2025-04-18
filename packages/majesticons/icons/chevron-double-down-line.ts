import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleDownLineIcon],svg[majesticons-chevron-double-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.293 12.293a1 1 0 0 1 1.414 0L12 17.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"></svg:path><svg:path d="M5.293 4.293a1 1 0 0 1 1.414 0L12 9.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
