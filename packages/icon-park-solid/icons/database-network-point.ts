import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDatabaseNetworkPointIcon],svg[icon-park-solid-database-network-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36v-6m-4 10H6m22 0h14"></svg:path><svg:path fill="currentColor" d="M28 40a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path d="M37 17c0 7.18-5.82 13-13 13s-13-5.82-13-13m26 0c0-7.18-5.82-13-13-13S11 9.82 11 17m26 0H11"></svg:path><svg:path fill="currentColor" d="M29 17c0 7.18-2.239 13-5 13s-5-5.82-5-13s2.239-13 5-13s5 5.82 5 13"></svg:path><svg:path d="M37 17H11"></svg:path></svg:g>`,
})
export class IconParkSolidDatabaseNetworkPointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
