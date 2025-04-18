import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPcTowerFilledIcon],svg[ix-pc-tower-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 42.667v426.667H106.667V42.667zm-128 234.667h-42.667V320h42.667zM364.8 170.667H151.467v42.667H364.8zm-2.133-85.333H149.334V128h213.333z"></svg:path>`,
})
export class IxPcTowerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
