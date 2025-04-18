import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronRightIcon],svg[jam-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414z"></svg:path>`,
})
export class JamChevronRightIcon {
  readonly viewBox = input("-8 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
