import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBugVirusDocumentIcon],svg[streamline-bug-virus-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 11.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6l3 3V4M6 6.5l1.3 1.3M6 13.5l1.3-1.3M7 10H5.5M13 6.5l-1.3 1.3m1.3 5.7l-1.3-1.3"></svg:path><svg:path d="M7 9a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 0 1-5 0zm5 1h1.5M7 9.5h5"></svg:path></svg:g>`,
})
export class StreamlineBugVirusDocumentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
