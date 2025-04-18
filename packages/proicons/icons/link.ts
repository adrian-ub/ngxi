import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLinkIcon],svg[proicons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.621 7.5H7.25a4.5 4.5 0 0 0-4.5 4.5v0a4.5 4.5 0 0 0 4.5 4.5h2.371m4.758-9h2.371a4.5 4.5 0 0 1 4.5 4.5v0a4.5 4.5 0 0 1-4.5 4.5h-2.371M7.243 12h9.514"></svg:path>`,
})
export class ProiconsLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
