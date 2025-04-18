import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHedgecam2Icon],svg[arcticons-hedgecam-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.303 32.614a2.76 2.76 0 0 1 2.687-2.79a2.777 2.777 0 0 1 1.963 4.753c-1.137.93-4.65 3.616-4.65 3.616h5.477"></svg:path><svg:circle cx="24.037" cy="26.295" r="8.126" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.402 11.624h6.171l3.937-4.552h11.499l3.344 4.552h6.245a2.896 2.896 0 0 1 2.902 2.902v23.5a2.896 2.896 0 0 1-2.902 2.902H8.402A2.896 2.896 0 0 1 5.5 38.025v-23.5a2.896 2.896 0 0 1 2.902-2.902"></svg:path>`,
})
export class ArcticonsHedgecam2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
