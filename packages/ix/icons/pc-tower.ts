import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPcTowerIcon],svg[ix-pc-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 42.667v426.667H106.667V42.667zM364.8 256H151.467v170.667H364.8zm-87.466 42.667v42.667h-42.667v-42.667zm85.333-128H149.334v42.667h213.333zm0-85.333H149.334V128h213.333z"></svg:path>`,
})
export class IxPcTowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
