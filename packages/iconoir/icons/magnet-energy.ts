import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMagnetEnergyIcon],svg[iconoir-magnet-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 9v6.74C5 19.199 8.134 22 12 22s7-2.802 7-6.26V9M5 9h3m8 0h3"></svg:path><svg:path stroke-linecap="round" d="M14.074 11.5v3.56c0 1.072-.928 1.94-2.074 1.94s-2.074-.868-2.074-1.94V11.5"></svg:path><svg:path d="M10 13H5m14 0h-5"></svg:path><svg:path stroke-linecap="round" d="M11.667 2L10 5h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirMagnetEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
