import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSunsetBrokenIcon],svg[solar-sunset-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8 22h8M5 19h14M2 16h20M12 6v7m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393M10 6.341a6 6 0 0 1 6.5 9.627h-9A5.98 5.98 0 0 1 6 12c0-.701.12-1.374.341-2"></svg:path></svg:g>`,
})
export class SolarSunsetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
