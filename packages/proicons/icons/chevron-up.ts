import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsChevronUpIcon],svg[proicons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.75 14.25l6.19-6.19a1.5 1.5 0 0 1 2.12 0l6.19 6.19"></svg:path>`,
})
export class ProiconsChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
