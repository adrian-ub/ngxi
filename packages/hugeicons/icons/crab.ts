import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrabIcon],svg[hugeicons-crab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 3c2.287 0 6.096 0 4.7 4.97m0 0c-1.333.167-3.176.53-3.684-1.97m3.685 1.97l.091.73a3.97 3.97 0 0 1-1.595 3.69L18.016 14M7 3C4.713 3 .904 3 2.3 7.97m0 0c1.333.167 3.176.53 3.684-1.97M2.299 7.97l-.091.73a3.97 3.97 0 0 0 1.595 3.69L5.984 14M18 15.19c0 2.281-2.64 4.276-4.418 5.36c-.982.6-2.182.6-3.164 0C8.64 19.467 6 17.472 6 15.19C6 11.75 8.686 10 12 10s6 1.75 6 5.19M8 19c-1.455 0-2.91 0-4 2m12-2c1.454 0 2.91 0 4 2M6 16.5c-1 0-3-.5-4-2m16 2c1 0 3-.5 4-2M14 10l.5-1.5M10 10l-.5-1.5" color="currentColor"></svg:path>`,
})
export class HugeiconsCrabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
