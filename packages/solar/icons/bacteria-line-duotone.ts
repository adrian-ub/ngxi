import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBacteriaLineDuotoneIcon],svg[solar-bacteria-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path><svg:path d="M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"></svg:path><svg:path stroke-linecap="round" d="m4.5 11.5l.414-1" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.17 6.464 6.17 6.464M19 13.136s-1.162.473-1.483 1.673s.448 2.19.448 2.19m-4.545.773L15 19"></svg:path><svg:path stroke-linecap="round" d="M14.5 14v-2M12 5h-2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m12.5 9.5l-1-1"></svg:path></svg:g>`,
})
export class SolarBacteriaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
