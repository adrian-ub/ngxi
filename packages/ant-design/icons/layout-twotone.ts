import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignLayoutTwotoneIcon],svg[ant-design-layout-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M384 185h456v136H384zm-200 0h136v656H184zm696-73H144c-17.7 0-32 14.3-32 32v1c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v-1c0-17.7-14.3-32-32-32M384 385h456v456H384z"></svg:path><svg:path fill="currentColor" d="M880 113H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V145c0-17.7-14.3-32-32-32M320 841H184V185h136zm520 0H384V385h456zm0-520H384V185h456z"></svg:path>`,
})
export class AntDesignLayoutTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
