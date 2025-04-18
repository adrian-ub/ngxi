import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppConsoleIcon],svg[oui-app-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 9H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3M3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></svg:path><svg:path fill="currentColor" d="M29 32H3a3 3 0 0 1-3-3V14a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3M3 13a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="m7.29 17.71l3.3 3.29l-3.3 3.29l1.42 1.42l4.7-4.71l-4.7-4.71zM15 24h9v2h-9z"></svg:path>`,
})
export class OuiAppConsoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
