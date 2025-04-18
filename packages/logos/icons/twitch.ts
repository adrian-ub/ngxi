import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTwitchIcon],svg[logos-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5A3E85" d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717zm64.008 116.405H128V69.844h-23.275zm63.997 0h23.27V69.844h-23.27z"></svg:path>`,
})
export class LogosTwitchIcon {
  readonly viewBox = input("0 0 256 268")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
