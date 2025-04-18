import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenDriveIcon],svg[arcticons-rakuten-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 14.5H20c5.365 0 9.5 4.135 9.5 9.5s-4.135 9.5-9.5 9.5h-1.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 43.5c10.77 0 19.5-8.73 19.5-19.5S30.77 4.5 20 4.5H8.5v39zm6.761-12.739l7.027 7.027m.001-27.577l-7.027 7.027"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 17.5h10v-13m-10 26h10v13"></svg:path>`,
})
export class ArcticonsRakutenDriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
