import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintSlidersIcon],svg[pepicons-print-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path fill-rule="evenodd" d="M3 6.25a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H17a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M16 6.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0"></svg:path><svg:path fill-rule="evenodd" d="M13.25 7.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5M3 16.25a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H17a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M16 16.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0"></svg:path><svg:path fill-rule="evenodd" d="M13.25 17.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5M3 11.25a1 1 0 0 1 1-1h1.625a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m6.5 0a1 1 0 0 1 1-1H17a1 1 0 1 1 0 2h-6.5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M11 11.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0"></svg:path><svg:path fill-rule="evenodd" d="M8.25 12.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M3 4.75a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m11.38 0a.5.5 0 0 1 .5-.5h1.62a.5.5 0 0 1 0 1h-1.62a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 14.75a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m11.38 0a.5.5 0 0 1 .5-.5h1.62a.5.5 0 0 1 0 1h-1.62a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 16.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 9.75a.5.5 0 0 1 .5-.5h2.13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5m6.5 0a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.75 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintSlidersIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
