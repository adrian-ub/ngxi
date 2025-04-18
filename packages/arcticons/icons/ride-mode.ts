import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRideModeIcon],svg[arcticons-ride-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.147 20.378l1.734 14.928a6.444 6.444 0 0 1-8.301 6.902L17.25 37.17A15.564 15.564 0 0 1 6.082 22.057q.019-.59.077-1.189a17.111 17.111 0 0 1 33.988-.49"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.88 35.306l-26.434-12.56a2.661 2.661 0 0 1 1.143-5.065H39.57m-1.794 0l-9.874 10.983m-5.575-2.649l7.924-8.334"></svg:path>`,
})
export class ArcticonsRideModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
