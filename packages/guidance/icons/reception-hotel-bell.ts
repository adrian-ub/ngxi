import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceReceptionHotelBellIcon],svg[guidance-reception-hotel-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 5.5c5.344 0 8.705 2.8 9.376 7.63c.163 1.176 1.124 2.37 2.124 3.12V17H.5v-.75c1-.75 1.96-1.944 2.124-3.12C3.295 8.3 6.656 5.5 12 5.5Zm0 0v-3m-12 17h24m-14-17h4"></svg:path>`,
})
export class GuidanceReceptionHotelBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
