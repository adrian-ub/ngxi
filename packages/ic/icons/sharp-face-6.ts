import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFace6Icon],svg[ic-sharp-face-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8h2.62l2-4h6.76l2 4H20c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcSharpFace6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
