import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPencilIcon],svg[oui-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.148 3.148L11 2l-9 9v3h3l9-9l-1.144-1.144l-8.002 7.998a.5.5 0 0 1-.708 0a.5.5 0 0 1 0-.708zM11 1c.256 0 .512.098.707.293l3 3a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 5 15H2a1 1 0 0 1-1-1v-3c0-.265.105-.52.293-.707l9-9A1 1 0 0 1 11 1M5 14H2v-3z"></svg:path>`,
})
export class OuiPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
