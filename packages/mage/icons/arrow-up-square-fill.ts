import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpSquareFillIcon],svg[mage-arrow-up-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.59 10.25a1 1 0 0 1-1.41 0L13 8.81v8.8a1 1 0 1 1-2 0V8.84l-3.43 3.41a1 1 0 1 1-1.41-1.42l4.41-4.42a2 2 0 0 1 2.88 0l4.41 4.42a1 1 0 0 1-.02 1.42"></svg:path>`,
})
export class MageArrowUpSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
