import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineGroupWorkIcon],svg[ic-outline-group-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path><svg:circle cx="8" cy="14" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="14" r="2" fill="currentColor"></svg:circle>`,
})
export class IcOutlineGroupWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
