import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStraightCapSolidIcon],svg[streamline-straight-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v.541a3 3 0 0 0 0 5.918v.541A1.5 1.5 0 0 0 4 12h10V7.75H4.3a1.5 1.5 0 1 1 0-1.5H14V2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineStraightCapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
