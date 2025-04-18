import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleAltNegativeIcon],svg[healthicons-temple-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTempleAltNegative0)"><svg:path d="M14 12.048h7v2h-7zm7 4h-5v2h5zm2 2v-2h2v2zm-2 2h-8v2h8zm2 2v-2h2v2zm-2 2h-7v2h7zm2 2v-2h2v2zm-12 2v2h10v-2zm26 2v-2H27v2zm-12-2V30h-2v-1.952zm2-2h7v-2h-7zm0-4h8v-2h-8zm0-4h5v-2h-5zm0-4h7v-2h-7zm-2-2v2h-2v-2zM35 36v-3.952H13V36h7v-1.952h8V36zm-7 2v2h11v-2zm-8 0v2H9v-2z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM35 10.048h-5.083a6.002 6.002 0 0 0-11.834 0H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTempleAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTempleAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
