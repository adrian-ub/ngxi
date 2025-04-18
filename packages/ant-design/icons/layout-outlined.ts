import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignLayoutOutlinedIcon],svg[ant-design-layout-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-696 72h136v656H184zm656 656H384V384h456zM384 320V184h456v136z"></svg:path>`,
})
export class AntDesignLayoutOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
