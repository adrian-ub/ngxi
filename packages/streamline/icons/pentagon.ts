import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePentagonIcon],svg[streamline-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.232 6.67a1 1 0 0 0-.282-1.136L7.646 1.047a1 1 0 0 0-1.292 0L1.05 5.534A1 1 0 0 0 .768 6.67l2.48 6.202a1 1 0 0 0 .929.629h5.646a1 1 0 0 0 .928-.629z"></svg:path>`,
})
export class StreamlinePentagonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
