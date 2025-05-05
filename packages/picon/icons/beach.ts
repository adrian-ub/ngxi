import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBeachIcon],svg[picon-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1C3-2-2 3 1 7m3.5-3.5L8 7H7L4 4M3 5L2 6Q0 4 1 2m1-1q2-1 4 1L5 3"></svg:path>`,
})
export class PiconBeachIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
