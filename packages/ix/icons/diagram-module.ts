import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDiagramModuleIcon],svg[ix-diagram-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h298.667l64 64v320H128l-64-64zm277.333 42.667H106.667v256h234.666zM192 149.333v21.334h42.667l-.001 106.666H256V256h64v64h-64v-21.333h-64V320h-64v-64h64v21.333h21.333V192H192v21.333h-64v-64z"></svg:path>`,
})
export class IxDiagramModuleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
