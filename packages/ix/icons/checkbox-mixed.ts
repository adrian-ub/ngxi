import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxMixedIcon],svg[ix-checkbox-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 42.667h298.666v298.666H106.667zm256 128H149.333v42.666h213.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxMixedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
