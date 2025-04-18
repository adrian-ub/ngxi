import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSignalWifi1BarLockIcon],svg[ic-baseline-signal-wifi-1-bar-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1m-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5z"></svg:path><svg:path fill="currentColor" d="M15.5 14.5c0-2.8 2.2-5 5-5c.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4S.8 6.7.4 7L12 21.5l3.5-4.3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m6.7 14.9l5.3 6.6l3.5-4.3v-2.6c0-.2 0-.5.1-.7c-.9-.5-2.2-.9-3.6-.9c-3 0-5.1 1.7-5.3 1.9"></svg:path>`,
})
export class IcBaselineSignalWifi1BarLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
