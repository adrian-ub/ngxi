import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIDocumentsDenied24pxIcon],svg[healthicons-i-documents-denied-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8.362a2 2 0 0 0-.464-1.28l-2.283-2.74l-1.552-1.693A2 2 0 0 0 15.227 2zm10.698 6l-1.951-2.342l-1.247-1.36V7a1 1 0 0 0 1 1zm-9.583 6.369l1.456 1.37l1.842-1.955l1.956 1.842l1.37-1.457l-1.956-1.841l1.842-1.957L14.17 9l-1.842 1.957l-1.956-1.842L9 10.571l1.956 1.842z" clip-rule="evenodd"></svg:path><svg:path d="M5 6.5v-1H3v12c0 1.401.662 2.535 1.525 3.299C5.37 21.546 6.475 22 7.5 22h10v-2h-10c-.474 0-1.12-.23-1.65-.7c-.512-.453-.85-1.069-.85-1.8z"></svg:path></svg:g>`,
})
export class HealthiconsIDocumentsDenied24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
