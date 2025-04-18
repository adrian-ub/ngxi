import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallEndStroke12Icon],svg[garden-phone-call-end-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM3 7H1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1H9V5H3z"></svg:path>`,
})
export class GardenPhoneCallEndStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
