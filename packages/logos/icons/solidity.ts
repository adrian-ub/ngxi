import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSolidityIcon],svg[logos-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m191.513 0l-63.867 113.512H0L63.823 0z" opacity=".45"></svg:path><svg:path d="M127.646 113.512h127.691L191.513 0H63.823z" opacity=".6"></svg:path><svg:path d="m63.823 226.981l63.823-113.469L63.823 0L0 113.512z" opacity=".8"></svg:path><svg:path d="m64.442 397.25l63.867-113.513H256L192.132 397.25z" opacity=".45"></svg:path><svg:path d="M128.309 283.737H.618L64.441 397.25h127.691z" opacity=".6"></svg:path><svg:path d="m192.132 170.269l-63.823 113.468l63.823 113.513L256 283.737z" opacity=".8"></svg:path>`,
})
export class LogosSolidityIcon {
  readonly viewBox = input("0 0 256 398")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
