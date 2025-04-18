import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilterFillIcon],svg[ri-filter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z"></svg:path>`,
})
export class RiFilterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
