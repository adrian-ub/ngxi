import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticLineDuotoneIcon],svg[solar-printer-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"></svg:path><svg:path stroke-linecap="round" d="M18 12v4c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-4"></svg:path><svg:path d="M17.983 6c-.047-1.553-.22-2.48-.861-3.121C16.242 2 14.829 2 12 2s-4.242 0-5.121.879C6.238 3.52 6.064 4.447 6.018 6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19.5 12.443C17.873 11.713 15.412 11 12 11s-5.873.713-7.5 1.443"></svg:path></svg:g>`,
})
export class SolarPrinterMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
