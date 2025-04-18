import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAnchorIcon],svg[streamline-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 8H1.5a5.5 5.5 0 0 0 11 0H11M7 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0v10m-1.5-7h3"></svg:path>`,
})
export class StreamlineAnchorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
