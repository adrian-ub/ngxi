import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBatterySlashIcon],svg[cil-battery-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 176v-56.41A23.825 23.825 0 0 0 408 96H163.882l32 32H400v80h64v104h-48v32h80V176Zm-281.373-48l-32-32l-80-80H16v22.627L73.373 96H39.986a23.825 23.825 0 0 0-24 23.59v280.82a23.825 23.825 0 0 0 24 23.59h361.387l72 72H496v-22.627L266.563 243.937ZM47.986 392V128h57.387l264 264Z"></svg:path>`,
})
export class CilBatterySlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
