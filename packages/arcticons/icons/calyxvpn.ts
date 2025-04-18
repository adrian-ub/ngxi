import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalyxvpnIcon],svg[arcticons-calyxvpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5s-11.26 2-15.25 2v20c0 9.23 13.56 17 15.25 17s15.25-7.77 15.25-16.94v-20C35.26 6.53 24 4.5 24 4.5m6.19 21.65l-11.1 9.93l3.33-6.83h-4.5l5.62-11h-4.29l3-8.58h7.46l-3.55 6.9H32l-7 9.6Z"></svg:path>`,
})
export class ArcticonsCalyxvpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
