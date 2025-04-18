import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feLinkIcon],svg[fe-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.874 11h.252c.444-1.725 2.01-3 3.874-3h2a4 4 0 1 1 0 8h-2a4 4 0 0 1-3.874-3h-.252A4 4 0 0 1 8 16H6a4 4 0 1 1 0-8h2a4 4 0 0 1 3.874 3m-2.124.031A2 2 0 0 0 8 10H6a2 2 0 1 0 0 4h2a2 2 0 0 0 1.75-1.031a1 1 0 0 1 0-1.938M14 12.97A2 2 0 0 0 15.75 14h2a2 2 0 1 0 0-4h-2A2 2 0 0 0 14 11.031a1 1 0 0 1 0 1.938"></svg:path>`,
})
export class FeLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
