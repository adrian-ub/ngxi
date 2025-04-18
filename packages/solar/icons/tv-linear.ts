import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTvLinearIcon],svg[solar-tv-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16v-4c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 2l3 3.5L15 2m1 4v16"></svg:path><svg:path fill="currentColor" d="M20 16a1 1 0 1 0-2 0a1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path></svg:g>`,
})
export class SolarTvLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
