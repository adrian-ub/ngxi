import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentViewIcon],svg[carbon-document-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="none" d="M22 28a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.003 2.003 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24ZM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M12 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v4h2v-6a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h4Zm6-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
