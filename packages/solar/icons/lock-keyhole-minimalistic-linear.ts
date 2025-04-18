import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticLinearIcon],svg[solar-lock-keyhole-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:path stroke-linecap="round" d="M12 14v4m-6-8V8a6 6 0 1 1 12 0v2"></svg:path></svg:g>`,
})
export class SolarLockKeyholeMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
