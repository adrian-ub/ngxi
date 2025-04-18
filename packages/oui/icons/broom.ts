import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiBroomIcon],svg[oui-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.732 13.096l-.197-.197l2.83-2.828l.706.707l-2.829 2.828l.708.708l2.828-2.828a1 1 0 0 0 0-1.414L5.658 7.95a1 1 0 0 0-.708-.293a1 1 0 0 0-.708.293l-2.828 2.829l.707.707l2.829-2.83l.707.708l-2.829 2.829zm1.218-6.44c.512 0 1.023.196 1.414.587l2.121 2.12a2 2 0 0 1 0 2.83L4.95 15.728L0 10.778l3.535-3.535a2 2 0 0 1 1.415-.586M14.02 1l.708.707l-6.95 6.95l-.707-.707z"></svg:path>`,
})
export class OuiBroomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
