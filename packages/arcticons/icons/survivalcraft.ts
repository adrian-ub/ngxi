import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSurvivalcraftIcon],svg[arcticons-survivalcraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M24.28 14.086v11.512m0-11.512l8.962-4.68m.001 0L23.798 5.5m0 0L14.59 9.53l9.69 4.556M14.59 9.53l.705 10.778m0 0l8.986 5.29m8.962-16.192l-.625 10.788l-8.337 5.404l10.562 6.417l-.81 10.002"></svg:path><svg:path d="m32.618 20.194l10.206 5.057l-7.981 6.764m-.81 10.002l7.593-6.834l1.198-9.932m-18.544.348v9.872l9.753 6.546M24.28 25.599l-10.173 6.61m1.188-11.901L5.176 26.082l8.931 6.127M24.28 35.47l-9.468 7.03M5.176 26.082l1.388 9.507l8.248 6.911m-.705-10.291l.705 10.291"></svg:path></svg:g>`,
})
export class ArcticonsSurvivalcraftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
