import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentUnprotectedIcon],svg[carbon-document-unprotected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.499 9.085l-6.792-6.792A1 1 0 0 0 16 2H6a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H6V4h8v6a2 2 0 0 0 2 2h6.292a1.708 1.708 0 0 0 1.207-2.915M16 10V4.414L21.585 10Z"></svg:path><svg:path fill="currentColor" d="M28 21h-6v-3a2 2 0 0 1 4 0h2a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v5a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-5a2.003 2.003 0 0 0-2-2m-8 7v-5h8v5Z"></svg:path>`,
})
export class CarbonDocumentUnprotectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
