import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRouteBrokenIcon],svg[solar-route-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-width="1.5" clip-path="url(#solarRouteBroken0)"><svg:path d="M19.071 4.929c3.333 3.333 5 5 5 7.07c0 2.072-1.667 3.739-5 7.072s-5 5-7.071 5s-3.738-1.667-7.071-5s-5-5-5-7.071s1.667-3.738 5-7.071c3.333-3.334 5-5 7.071-5c1.377 0 2.575.737 4.204 2.21"></svg:path><svg:path stroke-linejoin="round" d="M16 11.5L13.333 9M16 11.5L13.333 14M16 11.5h-5.333C9.777 11.5 8 12 8 14"></svg:path></svg:g><svg:defs><svg:clippath id="solarRouteBroken0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarRouteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
