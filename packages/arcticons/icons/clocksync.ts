import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClocksyncIcon],svg[arcticons-clocksync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17" cy="24" r="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.442 17.127a9.5 9.5 0 1 1 0 13.746"></svg:path><svg:circle cx="17" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 22v-8.196M19 24h5.501m10.905-1.406l3.8-3.8m-6.618 3.794l-2.065-2.065"></svg:path>`,
})
export class ArcticonsClocksyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
