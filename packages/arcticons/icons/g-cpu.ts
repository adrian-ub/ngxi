import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGCpuIcon],svg[arcticons-g-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24a13.47 13.47 0 0 1-9.711 12.933a13.49 13.49 0 0 1-15.147-5.695c-3.22-5.05-2.717-11.618 1.235-16.12S30.282 9.26 35.714 11.79"></svg:path><svg:ellipse cx="30.082" cy="23.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.706" ry="7.698"></svg:ellipse><svg:ellipse cx="30.082" cy="23.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.853" ry="3.849"></svg:ellipse><svg:circle cx="30.082" cy="23.76" r="1.445" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24h-5.703m-16.25-10.484H16.05m1.678 4.934h-7.623M16.53 24H4.5m9.966 5.263H8.674m12.517 4.917h-8.957"></svg:path>`,
})
export class ArcticonsGCpuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
