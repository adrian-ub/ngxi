import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTendaWifiIcon],svg[arcticons-tenda-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.4s1.91 6.254 4.472 7.73h-8.945C22.713 35.95 24 31.4 24 31.4M4.5 20.135A22.51 22.51 0 0 1 24 8.87a22.51 22.51 0 0 1 19.5 11.265"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.849 23.803a15.18 15.18 0 0 1 13.15-7.597a15.18 15.18 0 0 1 13.152 7.597"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.198 27.47a7.854 7.854 0 0 1 13.604 0"></svg:path>`,
})
export class ArcticonsTendaWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
