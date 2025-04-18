import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDashboardCarIcon],svg[icon-park-dashboard-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6.57198 37.428C3.70527 33.7128 2 29.0556 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 29.0556 44.2947 33.7128 41.428 37.428"></svg:path><svg:path d="M12.3035 31.6965C10.8474 29.4881 10 26.843 10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 26.843 37.1526 29.4881 35.6965 31.6965"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 30L40 46H8L24 30Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkDashboardCarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
