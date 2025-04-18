import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsChevronDownIcon],svg[bx-bxs-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16.939 7.939L12 12.879l-4.939-4.94l-2.122 2.122L12 17.121l7.061-7.06z" fill="currentColor"></svg:path>`,
})
export class BxBxsChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
