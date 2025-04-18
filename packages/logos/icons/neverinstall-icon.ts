import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNeverinstallIconIcon],svg[logos-neverinstall-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5B29FF" d="M85.661 99.099L0 148.133V49.868z"></svg:path><svg:path fill="#2962FF" d="m85.662 99.077l84.676-49.23L256 99.077v97.083l-85.662 49.231v-97.083z"></svg:path><svg:path fill="#FFC629" d="M85.661 0L0 49.821l85.661 49.231l84.677-49.231z"></svg:path><svg:path fill="#FAFAFA" d="m0 49.821l85.66 49.23l84.678-49.23L85.66 0zm15.983-.041l69.655 40.032l68.854-40.032L85.637 9.268z"></svg:path><svg:path fill="#FFBC00" d="M85.654 89.856V9.34L16 49.849z"></svg:path>`,
})
export class LogosNeverinstallIconIcon {
  readonly viewBox = input("0 0 256 246")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
