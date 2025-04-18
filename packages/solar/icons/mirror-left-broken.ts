import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMirrorLeftBrokenIcon],svg[solar-mirror-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 12c0 4.243 0 6.364 1.318 7.682S7.758 21 12 21m0-18C7.757 3 5.636 3 4.318 4.318C3.502 5.134 3.192 6.257 3.073 8"></svg:path><svg:path stroke-dasharray="2.5 3" d="M11 21h4c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3h-4"></svg:path><svg:path d="M12 22V2"></svg:path></svg:g>`,
})
export class SolarMirrorLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
