import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciChevronBigUpIcon],svg[ci-chevron-big-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.485 15.535L12 7.05l-8.485 8.485L4.93 16.95L12 9.878l7.071 7.072l1.414-1.415Z"></svg:path>`,
})
export class CiChevronBigUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
