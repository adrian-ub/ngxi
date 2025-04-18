import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIonLauncherIcon],svg[arcticons-ion-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.42 24.081a15.4 15.4 0 0 1-2.066 7.71m-5.644 5.643A15.42 15.42 0 0 1 8.58 24.08"></svg:path><svg:circle cx="24" cy="23.98" r="7.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.923" cy="34.964" r=".75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.416 19.301L24 8.501l18.584 10.8"></svg:path>`,
})
export class ArcticonsIonLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
