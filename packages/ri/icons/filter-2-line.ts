import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilter2LineIcon],svg[ri-filter-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14v6l-4 2v-8L4 5V3h16v2zM6.404 5L12 13.394L17.596 5z"></svg:path>`,
})
export class RiFilter2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
