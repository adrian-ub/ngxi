import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWeightIcon],svg[icon-park-outline-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M12 19.054q4.987-6 12-6q7.012 0 12 6"></svg:path><svg:path fill="currentColor" d="M24 31a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m19 21l5.008 7"></svg:path></svg:g>`,
})
export class IconParkOutlineWeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
