import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPersonPrintIcon],svg[pepicons-person-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" opacity=".8"><svg:path d="M7.75 6.6c0-1.95 1.53-3.6 3.5-3.6s3.5 1.65 3.5 3.6c0 1.95-1.53 3.6-3.5 3.6s-3.5-1.65-3.5-3.6Z"></svg:path><svg:path d="M11.264 9.067c-3.225 0-6.014 2.471-6.014 5.766l.002 2.168A1 1 0 0 0 6.25 18h10a1 1 0 0 0 1-1v-2.167c0-3.288-2.755-5.766-5.986-5.766Z"></svg:path></svg:g><svg:circle cx="9.5" cy="5.5" r="3" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M15 16.5v-2c0-3.098-2.495-6-5.5-6c-3.006 0-5.5 2.902-5.5 6v2"></svg:path></svg:g>`,
})
export class PepiconsPersonPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
