import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScannerOffIcon],svg[mdi-scanner-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-2-2H5a2 2 0 0 1-2-2v-5.5c0-.8.5-1.6 1.2-1.8l2.37-.86zM6.4 12h2.33l-.62-.62zM5 15v2h8.73l-2-2zM19.8 5l.7 1.9l-8.65 3.13l-1.55-1.56zm-.8 7a2 2 0 0 1 2 2v4c0 .34-.09.66-.24.94L19 17.18V15h-2.18l-3-3z"></svg:path>`,
})
export class MdiScannerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
