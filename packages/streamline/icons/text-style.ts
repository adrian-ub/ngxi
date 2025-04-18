import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTextStyleIcon],svg[streamline-text-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m-2.5 0h5M1.5 3V1.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1V3"></svg:path>`,
})
export class StreamlineTextStyleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
