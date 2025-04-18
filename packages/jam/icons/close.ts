import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCloseIcon],svg[jam-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485L2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535l3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></svg:path>`,
})
export class JamCloseIcon {
  readonly viewBox = input("-6 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
