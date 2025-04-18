import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNavigationIcon],svg[whh-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024q-40 0-96-64L576 832q-10-6-35-22t-36-22.5t-28-13t-29-6.5q-16 0-35 8.5T361.5 806T320 832L160 960q-3 3-14 13.5t-15.5 15t-15 13t-17.5 12t-16.5 7T64 1024q-27 0-45.5-19T0 960L384 64q0-26 18.5-45t45-19T493 19t19 45l384 896q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhNavigationIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
