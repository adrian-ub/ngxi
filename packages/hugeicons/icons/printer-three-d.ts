import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrinterThreeDIcon],svg[hugeicons-printer-three-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8 2H2v.5a2 2 0 0 0 2 2h4zm14 0h-6v2.5h4a2 2 0 0 0 2-2zm-6 0H8v8h8zm-2.5 11h-3L8 10h8zm0 0h-3v1.757a3 3 0 0 0 .879 2.122L12 17.5l.621-.621a3 3 0 0 0 .879-2.122zM2 22h8a2 2 0 0 0 2-2m2-15v.01m0 2.49v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsPrinterThreeDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
