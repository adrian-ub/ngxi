import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAffordableAndCleanEnergyIcon],svg[streamline-affordable-and-clean-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.862.858v.644m0 3.194v1.535m0 5.991v.644M.859 6.862h.643m10.721 0h.643M11.15 2.574l-.428.428m-7.72 7.719l-.428.428m0-8.575l.428.428m7.72 7.719l.428.428M3 6.862a3.861 3.861 0 1 0 7.722 0a3.861 3.861 0 1 0-7.722 0"></svg:path><svg:path d="M5.45 5.779a1.764 1.764 0 1 0 2.823 0"></svg:path></svg:g>`,
})
export class StreamlineAffordableAndCleanEnergyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
