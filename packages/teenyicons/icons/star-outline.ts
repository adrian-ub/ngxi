import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsStarOutlineIcon],svg[teenyicons-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 12.04l-4.326 2.275L4 9.497L.5 6.086l4.837-.703L7.5 1l2.163 4.383l4.837.703L11 9.497l.826 4.818z"></svg:path>`,
})
export class TeenyiconsStarOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
