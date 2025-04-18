import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignWalletOutlinedIcon],svg[ant-design-wallet-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 464H528V448h312zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344zM580 512a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignWalletOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
