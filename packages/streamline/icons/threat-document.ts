import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineThreatDocumentIcon],svg[streamline-threat-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 11.5H1.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6l3 3v1m2.92 8.11a.62.62 0 0 1-.203.81a.55.55 0 0 1-.287.08H7.06a.55.55 0 0 1-.49-.3a.62.62 0 0 1 0-.59l2.95-5.32a.54.54 0 0 1 1 0zM10 10.5v-1"></svg:path><svg:path d="M9.995 12.125a.125.125 0 0 1 0-.25m0 .25a.125.125 0 1 0 0-.25"></svg:path></svg:g>`,
})
export class StreamlineThreatDocumentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
