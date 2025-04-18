import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRoundaboutRightIcon],svg[ic-sharp-roundabout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4v1h6.17l-1.59 1.59L18 13l4-4l-4-4l-1.41 1.41L18.17 8h-4.25C13.44 5.16 10.97 3 8 3C4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-8z"></svg:path>`,
})
export class IcSharpRoundaboutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
