import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBinocularsIcon],svg[tabler-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m10 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m2.346-6.83l-.729-1.261c-.16-.248-1.056-.203-1.117.091l-.177 1.38"></svg:path><svg:path d="m19.761 14.813l-2.84-5.133C16.732 9.37 16.329 9 15.5 9c-.828 0-1.5.448-1.5 1v6M7.654 9.17l.729-1.261C8.543 7.66 9.439 7.706 9.5 8l.177 1.38"></svg:path><svg:path d="m4.239 14.813l2.84-5.133C7.268 9.37 7.671 9 8.5 9c.828 0 1.5.448 1.5 1v6m0-4h4v2h-4z"></svg:path></svg:g>`,
})
export class TablerBinocularsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
