import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleUpIcon],svg[gg-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m17.657 11.293l-1.414 1.414L12 8.464l-4.243 4.243l-1.414-1.414L12 5.636z"></svg:path><svg:path d="m17.657 16.95l-1.414 1.414L12 14.12l-4.243 4.243l-1.414-1.414L12 11.293z"></svg:path></svg:g>`,
})
export class GgChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
