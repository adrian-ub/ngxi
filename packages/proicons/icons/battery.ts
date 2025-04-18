import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBatteryIcon],svg[proicons-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="12" x="2.75" y="6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="3.25"></svg:rect><svg:rect width="7" height="7" x="5.25" y="8.5" fill="currentColor" rx="1.5"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 10v4"></svg:path></svg:g>`,
})
export class ProiconsBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
