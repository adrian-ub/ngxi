import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsChevronRightIcon],svg[proicons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.75 4.75l6.19 6.19a1.5 1.5 0 0 1 0 2.12l-6.19 6.19"></svg:path>`,
})
export class ProiconsChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
