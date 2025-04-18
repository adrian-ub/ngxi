import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsExclamationCirclePrintIcon],svg[pepicons-exclamation-circle-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="11" r="7" opacity=".8"></svg:circle><svg:path d="M9.5 6.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Z"></svg:path><svg:path fill-rule="evenodd" d="M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0Zm13 0a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z" clip-rule="evenodd"></svg:path><svg:circle cx="10" cy="13.75" r=".75"></svg:circle></svg:g>`,
})
export class PepiconsExclamationCirclePrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
