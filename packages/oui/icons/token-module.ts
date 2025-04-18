import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenModuleIcon],svg[oui-token-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 2l5.196 3v.178l-.866.468V5.5L8 3L3.67 5.5v5L8 13l4.33-2.5V5.77l.866-.474V11L8 14l-5.196-3V5z"></svg:path><svg:path fill="currentColor" d="M5.243 4.429L9.597 7.04L8 7.928L3.743 5.563a.5.5 0 1 0-.486.874L7.5 8.794V13.5h1V8.794l4.243-2.357l.06-.04l.392-.202V5.047l-.917.505l-.02.01l-.106.06l-.191.105l-1.355.753l-4.849-2.909z"></svg:path>`,
})
export class OuiTokenModuleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
