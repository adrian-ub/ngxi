import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarSend02Icon],svg[hugeicons-dollar-send-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.625 8.63C10.625 6.625 8.778 5 6.5 5S2.375 6.625 2.375 8.63S3.5 11.74 6.5 11.74s4.5 1.038 4.5 3.63C11 17.963 8.985 19 6.5 19S2 17.375 2 15.37M6.5 3v18M22 12h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 12c0-.7-1.994-2.008-2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDollarSend02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
