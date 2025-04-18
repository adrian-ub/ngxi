import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignWalletTwotoneIcon],svg[ant-design-wallet-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 464H528V448h312zm0-192H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M528 576h312V448H528zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M580 512a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V640H496c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32h344V184H184z"></svg:path>`,
})
export class AntDesignWalletTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
