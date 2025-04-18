import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEmphasisIcon],svg[ri-emphasis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M18 3v2H8v4h9v2H8v4h10v2H6V3z"></svg:path>`,
})
export class RiEmphasisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
