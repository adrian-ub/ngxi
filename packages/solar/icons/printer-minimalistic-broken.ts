import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticBrokenIcon],svg[solar-printer-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879c.3.3.498.662.628 1.121"></svg:path><svg:path d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 12v4c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862M6 12v4c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862"></svg:path><svg:path d="M12 11c3.412 0 5.873.713 7.5 1.443m-15 0a15.8 15.8 0 0 1 3.5-1.08"></svg:path></svg:g>`,
})
export class SolarPrinterMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
