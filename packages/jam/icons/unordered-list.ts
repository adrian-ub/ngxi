import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUnorderedListIcon],svg[jam-unordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0 8h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2m0-4h9a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2M1 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamUnorderedListIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
