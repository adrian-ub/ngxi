import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinSmartphone01Icon],svg[hugeicons-bitcoin-smartphone-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.599 5c-.135-.869-.39-1.491-.874-1.975C15.7 2 14.05 2 10.75 2S5.8 2 4.775 3.025S3.75 5.7 3.75 9v6c0 3.3 0 4.95 1.025 5.975S7.45 22 10.75 22s4.95 0 5.975-1.025c.483-.484.739-1.106.874-1.975"></svg:path><svg:path d="M16.188 14.667V9.333m1.562 0V8m0 8v-1.333M16.188 12h3.125m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.937 1H15.25M19.313 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H15.25M10.75 19h.009M9.75 5h2"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinSmartphone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
