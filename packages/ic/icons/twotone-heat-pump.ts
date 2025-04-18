import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneHeatPumpIcon],svg[ic-twotone-heat-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm7-13c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.75-2.08c-.55-.1-1.05-.32-1.5-.62l1.5-1.5zm1.5 0v-2.11l1.5 1.5c-.45.3-.95.51-1.5.61m2.56-1.67l-1.5-1.5h2.11c-.1.55-.31 1.05-.61 1.5m.61-3h-2.11l1.5-1.5c.3.45.51.95.61 1.5m-3.17-3.17c.55.1 1.05.32 1.5.62l-1.5 1.5zM12 11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-.75-2.92v2.11l-1.5-1.5c.45-.3.95-.51 1.5-.61M8.69 9.75l1.5 1.5H8.08c.1-.55.31-1.05.61-1.5m1.5 3l-1.5 1.5c-.3-.44-.51-.95-.62-1.5z"></svg:path>`,
})
export class IcTwotoneHeatPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
