import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsWiFiIcon],svg[proicons-wi-fi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 8.988A12.068 12.068 0 0 1 21.25 9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.64 11.964a8.297 8.297 0 0 1 12.72.01m-9.805 3.029a4.495 4.495 0 0 1 6.89.005"></svg:path><svg:circle cx="12" cy="17.878" r="1.445" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsWiFiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
