import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEntryNegativeIcon],svg[healthicons-entry-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsEntryNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm21 10h-7v27h7zm0-2h-9v31h9v3.613a1 1 0 0 0 1.316.948l13-4.333a1 1 0 0 0 .684-.949V9.721a1 1 0 0 0-.684-.949l-13-4.333A1 1 0 0 0 21 5.387zm6 15c0 1.105-.448 2-1 2s-1-.895-1-2s.448-2 1-2s1 .895 1 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsEntryNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsEntryNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
