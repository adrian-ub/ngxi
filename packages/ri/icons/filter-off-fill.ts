import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilterOffFillIcon],svg[ri-filter-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.929.515L21.07 14.657l-1.414 1.414l-3.823-3.822L14 14.999v7h-4v-7L4 6H3V4h4.585l-2.07-2.07zM21 4v2h-1l-1.915 2.872L13.213 4z"></svg:path>`,
})
export class RiFilterOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
