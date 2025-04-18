import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineStarPurple500Icon],svg[ic-outline-star-purple500-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></svg:path>`,
})
export class IcOutlineStarPurple500Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
