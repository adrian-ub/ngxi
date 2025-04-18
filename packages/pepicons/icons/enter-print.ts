import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsEnterPrintIcon],svg[pepicons-enter-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="10" height="15" x="8.25" y="4" fill="currentColor" opacity=".8" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.867 7.5L10.95 10L8.867 7.5Zm0 5L10.95 10l-2.083 2.5Z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M10.5 10H3m12.5 7H6.3m9.2-14H6.326M6.25 17v-4m0-6V3m9.35 14V3"></svg:path></svg:g>`,
})
export class PepiconsEnterPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
