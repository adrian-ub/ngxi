import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMemoryIcon],svg[cil-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 320h128V192H192Zm32-96h64v64h-64Z"></svg:path><svg:path fill="currentColor" d="M32 288v32h72v88h88v72h32v-72h64v72h32v-72h88v-88h72v-32h-72v-64h72v-32h-72v-88h-88V32h-32v72h-64V32h-32v72h-88v88H32v32h72v64Zm104-152h240v240H136Z"></svg:path>`,
})
export class CilMemoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
