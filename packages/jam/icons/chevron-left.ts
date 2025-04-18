import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronLeftIcon],svg[jam-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05z"></svg:path>`,
})
export class JamChevronLeftIcon {
  readonly viewBox = input("-8 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
