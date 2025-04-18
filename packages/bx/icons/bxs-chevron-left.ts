import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsChevronLeftIcon],svg[bx-bxs-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.939 4.939L6.879 12l7.06 7.061l2.122-2.122L11.121 12l4.94-4.939z" fill="currentColor"></svg:path>`,
})
export class BxBxsChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
