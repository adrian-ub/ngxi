import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchAccessShortcutIcon],svg[material-symbols-light-switch-access-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.539 21.02q-2.752-1.162-4.376-3.614t-1.624-5.429q0-2.39 1.102-4.495Q10.742 5.377 12.7 4H8.462V3h6.077v6.077h-1V4.589q-1.887 1.217-2.944 3.17t-1.057 4.199q0 2.569 1.35 4.707t3.65 3.256z"></svg:path>`,
})
export class MaterialSymbolsLightSwitchAccessShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
