import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSerialPortIcon],svg[mdi-serial-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h10v2h2v3h-3v6H8V8H5V5h2zm10 6h2v5h-2zm-6 6h2v7h-2zM5 9h2v5H5z"></svg:path>`,
})
export class MdiSerialPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
