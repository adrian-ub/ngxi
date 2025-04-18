import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundFace6Icon],svg[ic-round-face-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8v-.03c2.31-.22 3.43-1.59 4.34-3.41c.17-.35.51-.56.9-.56h5.53c.38 0 .72.21.89.55c.9 1.8 1.99 3.19 4.34 3.41v.03c0 4.42-3.59 8.01-8 8.01"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcRoundFace6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
