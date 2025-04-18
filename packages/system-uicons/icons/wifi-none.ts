import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWifiNoneIcon],svg[system-uicons-wifi-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 4)"><svg:path d="M2.727 7.033a7.56 7.56 0 0 1 3.46-1.58m2.495-.031a7.56 7.56 0 0 1 3.645 1.611M.287 4.667a10.9 10.9 0 0 1 3.331-1.969m2.09-.552c3.141-.51 6.465.33 9.006 2.52M1 0l13 13.071M5.134 9.407a4.17 4.17 0 0 1 4.739 0"></svg:path><svg:circle cx="7.5" cy="11.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWifiNoneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
