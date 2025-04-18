import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLinkCircleIcon],svg[hugeicons-link-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.001 12A9 9 0 0 1 12 21a9.001 9.001 0 1 1 0-18m8.554.469L14.99 9.01m5.564-5.541c-.495-.495-3.832-.45-4.537-.44m4.537.44c.495.495.449 3.83.439 4.536" color="currentColor"></svg:path>`,
})
export class HugeiconsLinkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
