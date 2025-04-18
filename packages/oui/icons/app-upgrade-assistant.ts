import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppUpgradeAssistantIcon],svg[oui-app-upgrade-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-8a3 3 0 1 0 0 6a3 3 0 0 0 0-6" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M27.42 19.69a12 12 0 0 1-23.11-1l2.27-.45l-4.32-4.47L0 19.55l2.39-.47a14 14 0 0 0 27 1.23zm2.23-6.77a14 14 0 0 0-27-1.23l1.9.62a12 12 0 0 1 23.11 1l-2.27.45l4.32 4.46L32 12.45z"></svg:path>`,
})
export class OuiAppUpgradeAssistantIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
