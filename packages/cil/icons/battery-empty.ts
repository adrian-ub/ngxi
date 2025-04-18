import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBatteryEmptyIcon],svg[cil-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.986 424H408a23.825 23.825 0 0 0 24-23.59V344h64V176h-64v-56.41A23.825 23.825 0 0 0 408 96H39.986a23.825 23.825 0 0 0-24 23.59v280.82a23.825 23.825 0 0 0 24 23.59m8-296H400v80h64v104h-64v80H47.986Z"></svg:path>`,
})
export class CilBatteryEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
