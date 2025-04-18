import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlcIcon],svg[ix-plc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 42.668v426.667H106.667V42.668zm-42.666 42.667H149.333v341.333h213.334zm-85.334 277.333v42.667h-42.666v-42.667zm-42.666-42.667v42.667H192v-42.667zm85.333 0v42.667h-42.667v-42.667zm-42.667-42.666v42.666h-42.666v-42.666zm64-170.667v149.333H170.667V106.668zm-42.666 42.667h-85.334v64h85.334z"></svg:path>`,
})
export class IxPlcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
