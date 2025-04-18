import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSuitcaseLineIcon],svg[ri-suitcase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1zm1 5H8v11h8zM4 8v11h2V8zm10-3h-4v1h4zm4 3v11h2V8z"></svg:path>`,
})
export class RiSuitcaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
