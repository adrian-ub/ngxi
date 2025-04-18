import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMobilePhoneStroke12Icon],svg[garden-mobile-phone-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="7" height="11" x="2.5" y=".5" fill="none" stroke="currentColor" rx=".5" ry=".5"></svg:rect><svg:path fill="currentColor" d="M2.5.5h7V2h-7zm0 8.5v2.5h7V9zM7 11H5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5"></svg:path>`,
})
export class GardenMobilePhoneStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
