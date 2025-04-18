import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsFlagStraightIcon],svg[pepicons-flag-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.5 4v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L14.659 4H4.5Zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L15.1 7.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 16.579 2H3.5Z"></svg:path><svg:path d="M3.5 3a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Z"></svg:path></svg:g>`,
})
export class PepiconsFlagStraightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
