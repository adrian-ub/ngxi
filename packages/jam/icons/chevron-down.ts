import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronDownIcon],svg[jam-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364z"></svg:path>`,
})
export class JamChevronDownIcon {
  readonly viewBox = input("-5 -8 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
