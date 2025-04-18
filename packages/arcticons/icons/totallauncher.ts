import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTotallauncherIcon],svg[arcticons-totallauncher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.858 18.803V8.836a2.18 2.18 0 0 1 2.185-2.187h30.272A2.18 2.18 0 0 1 43.5 8.836V20.15a2.18 2.18 0 0 1-2.185 2.187H36.34"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.685 18.963h21.977a2.18 2.18 0 0 1 2.185 2.187v1.546a2.18 2.18 0 0 1-2.185 2.187H6.685A2.18 2.18 0 0 1 4.5 22.696V21.15a2.18 2.18 0 0 1 2.185-2.187"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.608 16.762a2.51 2.51 0 0 1 2.516-2.518h15.384a2.51 2.51 0 0 1 2.516 2.518v15.396a2.51 2.51 0 0 1-2.516 2.518H18.124a2.51 2.51 0 0 1-2.516-2.518V24.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.354 34.78v4.384a2.18 2.18 0 0 1-2.185 2.187h-10.19a2.18 2.18 0 0 1-2.186-2.187V25.241"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="8.8" d="M15.608 16.762v1.92"></svg:path>`,
})
export class ArcticonsTotallauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
