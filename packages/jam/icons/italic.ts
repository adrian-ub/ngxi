import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamItalicIcon],svg[jam-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.273 8l1.95-6H3a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2H6.326l-1.95 6H6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamItalicIcon {
  readonly viewBox = input("-7.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
