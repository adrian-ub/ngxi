import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMobilePhoneFill16Icon],svg[garden-mobile-phone-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9" height="15" x="3.5" y=".5" fill="none" stroke="currentColor" rx=".5" ry=".5"></svg:rect><svg:path fill="currentColor" d="M3.5.5h9V2h-9zm0 12.5v2.5h9V13zm6 2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1M5 3h6v9H5z"></svg:path>`,
})
export class GardenMobilePhoneFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
