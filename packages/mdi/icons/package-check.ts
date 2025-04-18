import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPackageCheckIcon],svg[mdi-package-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3q-.75 0-1.2.6L3.5 5.2c-.3.4-.5.8-.5 1.3V19c0 1.1.9 2 2 2h8.3c-.2-.6-.3-1.3-.3-2c0-3.3 2.7-6 6-6c.7 0 1.4.1 2 .3V6.5c0-.5-.2-.9-.5-1.3l-1.4-1.7c-.2-.3-.6-.5-1.1-.5zm-.1 1h12l.9 1H5.1zM6 15h6v3H6zm15.3.8l-3.6 3.6l-1.6-1.6L15 19l2.8 3l4.8-4.8z"></svg:path>`,
})
export class MdiPackageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
