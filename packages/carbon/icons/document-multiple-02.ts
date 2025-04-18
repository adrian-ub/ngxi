import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentMultiple02Icon],svg[carbon-document-multiple-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 31H6c-1.1 0-2-.9-2-2V12h2v17h12z"></svg:path><svg:path fill="currentColor" d="M22 27H10c-1.1 0-2-.9-2-2V8h2v17h12z"></svg:path><svg:path fill="currentColor" d="M16 16h8v2h-8z"></svg:path><svg:path fill="currentColor" d="m27.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3h-6c-1.1 0-2 .9-2 2v17c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M20 4.4l5.6 5.6H20zM26 21H14V4h4v6c0 1.1.9 2 2 2h6z"></svg:path>`,
})
export class CarbonDocumentMultiple02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
