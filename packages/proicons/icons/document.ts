import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDocumentIcon],svg[proicons-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="15" height="18.5" x="4.5" y="2.75" rx="3.5"></svg:rect><svg:path d="M8.5 6.755h7m-7 4h7m-7 4H12"></svg:path></svg:g>`,
})
export class ProiconsDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
