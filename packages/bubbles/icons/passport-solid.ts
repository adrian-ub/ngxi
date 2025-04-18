import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPassportSolidIcon],svg[bubbles-passport-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.3 13.5a.49.49 0 0 0 .5-.5q.084-1.325.38-2.62a.48.48 0 0 0-.47-.593a.5.5 0 0 0-.29.093a5.54 5.54 0 0 0-2 3a.5.5 0 0 0 .48.63zm6.4-.5a.5.5 0 0 0 .5.47h1.39a.49.49 0 0 0 .39-.19a.5.5 0 0 0 .09-.44a5.54 5.54 0 0 0-2-3a.5.5 0 0 0-.58 0a.48.48 0 0 0-.21.53c.21.864.351 1.744.42 2.63m-3.31-4.19a9.8 9.8 0 0 0-1.1 4.19a.48.48 0 0 0 .13.38a.5.5 0 0 0 .37.16h1.92a.51.51 0 0 0 .477-.336a.5.5 0 0 0 .023-.204a9.8 9.8 0 0 0-1.1-4.15a.12.12 0 0 0-.11-.09h-.58a.1.1 0 0 0-.03.05m-2.58 6.66a.5.5 0 0 0-.5-.47h-1.4a.49.49 0 0 0-.39.19a.5.5 0 0 0-.09.44a5.5 5.5 0 0 0 2 3a.5.5 0 0 0 .58 0a.51.51 0 0 0 .21-.54a14.6 14.6 0 0 1-.41-2.62m3.29 4.24a10.4 10.4 0 0 0 1.1-4.17a.45.45 0 0 0-.13-.38a.48.48 0 0 0-.36-.16h-1.92a.48.48 0 0 0-.36.16a.45.45 0 0 0-.13.38a10.4 10.4 0 0 0 1.1 4.17z"></svg:path><svg:path d="M20.8 5.17a.48.48 0 0 1-.3-.45V2a2 2 0 0 0-2-2h-13A3.5 3.5 0 0 0 2 3.5V21a3 3 0 0 0 3 3h15a2 2 0 0 0 2-2V7a2 2 0 0 0-1.2-1.83M4 3.5A1.5 1.5 0 0 1 5.5 2H18a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5.5A1.5 1.5 0 0 1 4 3.5m7.75 17.75a7 7 0 1 1 0-14a7 7 0 0 1 0 14"></svg:path><svg:path d="M15.19 15a.5.5 0 0 0-.5.47a14.6 14.6 0 0 1-.4 2.63a.51.51 0 0 0 .21.54a.5.5 0 0 0 .58 0a5.5 5.5 0 0 0 2-3a.5.5 0 0 0-.48-.63z"></svg:path></svg:g>`,
})
export class BubblesPassportSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
