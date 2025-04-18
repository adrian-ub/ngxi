import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintYenIcon],svg[pepicons-print-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".2"><svg:path d="M11.207 9.207a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M9.793 9.207a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414"></svg:path><svg:path d="M4.5 9.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1"></svg:path><svg:path d="M10.5 9.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1"></svg:path></svg:g><svg:path d="M9.336 8.87a.5.5 0 0 1-.706-.034l-5-5.512a.5.5 0 1 1 .74-.672l5 5.512a.5.5 0 0 1-.034.706"></svg:path><svg:path d="M8.664 8.87a.5.5 0 0 0 .706-.034l5-5.512a.5.5 0 1 0-.74-.672l-5 5.512a.5.5 0 0 0 .034.706"></svg:path><svg:path d="M3.5 8.988a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5m0 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M9 8a.5.5 0 0 1 .5.5v8.488a.5.5 0 0 1-1 0V8.5A.5.5 0 0 1 9 8"></svg:path></svg:g>`,
})
export class PepiconsPrintYenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
