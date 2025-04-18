import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenNullIcon],svg[oui-token-null-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.002 12.412l-.962.962a1 1 0 0 1-1.414-1.414l.962-.962a5.333 5.333 0 0 1 7.41-7.41l.962-.962a1 1 0 1 1 1.414 1.414l-.962.962a5.333 5.333 0 0 1-7.41 7.41m.966-.966a4 4 0 0 0 5.478-5.478zm-1.414-1.414l5.478-5.478a4 4 0 0 0-5.478 5.478"></svg:path>`,
})
export class OuiTokenNullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
