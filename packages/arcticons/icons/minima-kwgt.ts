import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimaKwgtIcon],svg[arcticons-minima-kwgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.94 11.906v21.5m37.24-21.5v19.592M27.215 3.844v37.625M31.87 6.531v25.885m4.655-23.198v20.92M17.905 3.844v37.625M13.25 6.531v32.25M8.595 9.218v26.875m9.31-32.249L22.56 6.53l4.654-2.687m-9.309 4.95l4.655 2.688l4.654-2.688m-9.309 4.949l4.655 2.688l4.654-2.688m-9.309 4.949l4.655 2.688l4.654-2.688"></svg:path><svg:circle cx="37.06" cy="37.156" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.214 33.148v8.016m3.692 0v-2.053l-2.073-1.955l2.073-1.955v-2.053"></svg:path>`,
})
export class ArcticonsMinimaKwgtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
