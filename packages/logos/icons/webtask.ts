import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosWebtaskIcon],svg[logos-webtask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5F3237" d="M256 256H0V0h256z"></svg:path><svg:path fill="#E56E62" d="M256 256H51.2V51.2H256z"></svg:path><svg:path fill="#ED955B" d="M204.8 204.8H51.2V51.2h153.6z"></svg:path><svg:path fill="#F9E862" d="M204.8 204.8H102.4V102.4h102.4z"></svg:path><svg:path fill="#FFF" d="M153.6 153.6h-51.2v-51.2h51.2z"></svg:path>`,
})
export class LogosWebtaskIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
