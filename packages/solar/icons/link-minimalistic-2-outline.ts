import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2OutlineIcon],svg[solar-link-minimalistic-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarLinkMinimalistic2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
