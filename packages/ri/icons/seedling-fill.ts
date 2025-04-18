import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSeedlingFillIcon],svg[ri-seedling-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.998 7v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-7l.019-1a6.5 6.5 0 0 1 6.481-6zm-16-4a7 7 0 0 1 6.643 4.786A7.48 7.48 0 0 0 10.014 13H8.998a7 7 0 0 1-7-7V3z"></svg:path>`,
})
export class RiSeedlingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
