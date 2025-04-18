import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineOfflinePinIcon],svg[ic-outline-offline-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-5-5h10v2H7zm3.3-3.8L8.4 9.3L7 10.7l3.3 3.3L17 7.3l-1.4-1.4z"></svg:path>`,
})
export class IcOutlineOfflinePinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
