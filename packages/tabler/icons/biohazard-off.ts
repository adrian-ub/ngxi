import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBiohazardOffIcon],svg[tabler-biohazard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.586 10.586a2 2 0 1 0 2.836 2.82"></svg:path><svg:path d="M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 0 1-4.533 4.745h-.217m-4.75-4.75a4.75 4.75 0 0 1 7.737-3.693"></svg:path><svg:path d="M16.745 19.495a4.75 4.75 0 0 1-4.69-5.503h-.06m2.538-3.454a4.75 4.75 0 0 1 6.957 3.987v.217m-11.195-3.813a4.75 4.75 0 0 1-2.988-3.64m.66-3.324a5 5 0 0 1 .5-.66l.164-.172m6.718 0a4.75 4.75 0 0 1-.836 7.385M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBiohazardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
