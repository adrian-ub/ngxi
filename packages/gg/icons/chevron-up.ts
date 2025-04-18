import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronUpIcon],svg[gg-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.657 16.243l1.414-1.414l-7.07-7.072l-7.072 7.072l1.414 1.414L12 10.586z"></svg:path>`,
})
export class GgChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
