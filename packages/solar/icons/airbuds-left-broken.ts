import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLeftBrokenIcon],svg[solar-airbuds-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="1.5" d="M2 18.667v.833c0 .14 0 .209.003.268a2.35 2.35 0 0 0 2.23 2.229C4.29 22 4.36 22 4.5 22s.209 0 .268-.003a2.35 2.35 0 0 0 2.229-2.23C7 19.71 7 19.64 7 19.5v-.833m-5 0h5m-5 0L2.003 13M7 18.667V12a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.335A3.353 3.353 0 0 0 7.664 2H7.56A5.59 5.59 0 0 0 2 7.56V9"></svg:path><svg:path stroke-width="1.676" d="M8 5v3"></svg:path><svg:path stroke-width="1.5" d="M15.5 11a5.5 5.5 0 1 0 5.5 5.5"></svg:path><svg:path stroke-linejoin="round" stroke-width="1.5" d="M14 14v5h3"></svg:path><svg:path stroke-width="1.5" d="M14 5.1A5.01 5.01 0 0 1 17.9 9"></svg:path></svg:g>`,
})
export class SolarAirbudsLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
