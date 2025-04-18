import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWindowsIcon],svg[la-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 5L5 7.992v16.016L27 27zm-2 2.29V15H15V8.65zM13 8.921V15H7V9.738zM7 17h6v6.078l-6-.816zm8 0h10v7.71l-10-1.36z"></svg:path>`,
})
export class LaWindowsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
