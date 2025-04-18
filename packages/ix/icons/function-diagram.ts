import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFunctionDiagramIcon],svg[ix-function-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zm-170.666 42.666V256h-21.334v42.666h64V256h85.334v106.667h-85.334v-42.668h-64V320H192v-64h-42.667V149.333z"></svg:path>`,
})
export class IxFunctionDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
