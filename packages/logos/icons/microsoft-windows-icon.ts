import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMicrosoftWindowsIconIcon],svg[logos-microsoft-windows-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0078D4" d="M0 0h121.329v121.329H0zm134.671 0H256v121.329H134.671zM0 134.671h121.329V256H0zm134.671 0H256V256H134.671z"></svg:path>`,
})
export class LogosMicrosoftWindowsIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
