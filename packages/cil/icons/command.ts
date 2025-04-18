import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCommandIcon],svg[cil-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 176a80 80 0 1 0-80-80v48H176V96a80 80 0 1 0-80 80h48v160H96a80 80 0 1 0 80 80v-48h160v48a80 80 0 1 0 80-80h-48V176Zm-48-80a48 48 0 1 1 48 48h-48ZM144 416a48 48 0 1 1-48-48h48Zm0-272H96a48 48 0 1 1 48-48Zm192 192H176V176h160Zm80 32a48 48 0 1 1-48 48v-48Z"></svg:path>`,
})
export class CilCommandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
