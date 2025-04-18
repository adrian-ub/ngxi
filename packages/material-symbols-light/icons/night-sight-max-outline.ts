import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNightSightMaxOutlineIcon],svg[material-symbols-light-night-sight-max-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 10.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-6.5 9q1.696 0 3.08-.797t2.382-2.228q-3.477.011-5.72-2.113T8.5 9q0-.517.073-1.041t.239-1.074q-1.958.736-3.135 2.383T4.5 13q0 2.692 1.904 4.596T11 19.5m0 1q-3.14 0-5.32-2.18T3.5 13q0-2.927 1.97-5.088t4.934-2.373q.029 0 .057.002q.03.003.058.003q-.494.685-.757 1.61T9.5 9q0 2.692 1.904 4.596T16 15.5q.57 0 1.112-.104t1.057-.3q-.661 2.356-2.624 3.88T11 20.5m-.248-6.16"></svg:path>`,
})
export class MaterialSymbolsLightNightSightMaxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
