import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsRiscVIcon],svg[file-icons-risc-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m152.747 318.055l123.494 146.58L512 133.046V0H152.747c180.116 12.771 179.19 297.413 0 318.055M512 259.355V512H331.63zM116.785 72.148H0V512h217.905L31.47 286.45v-36.117h85.315c126.577 0 126.577-178.185 0-178.185"></svg:path>`,
})
export class FileIconsRiscVIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
