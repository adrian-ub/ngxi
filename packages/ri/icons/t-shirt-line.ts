import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTShirtLineIcon],svg[ri-t-shirt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.514 5l2.606-2.607a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414l-3.778 3.778V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-9.17L1.22 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 0L9.484 5zm.828 2H8.656L6.17 4.515L3.342 7.343L6.999 11v9h10v-9l3.657-3.657l-2.829-2.828z"></svg:path>`,
})
export class RiTShirtLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
