import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDnieNfcReaderIcon],svg[arcticons-dnie-nfc-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="36.767" cy="16.248" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.767 21.313v10.956m-4.977 0v-6.822c0-2.283-1.812-4.134-4.046-4.134s-4.047 1.85-4.047 4.134m.001 6.822V21.313m-4.573 4.134c0-2.283-1.812-4.134-4.046-4.134s-4.047 1.85-4.047 4.134v2.687c0 2.284 1.812 4.135 4.047 4.135s4.046-1.851 4.046-4.135m0 4.135V15.731"></svg:path>`,
})
export class ArcticonsDnieNfcReaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
