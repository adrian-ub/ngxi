import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignControlPlatformFilledIcon],svg[tdesign-control-platform-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.653L11.998.45L3 5.652l9 5.194zm.998 1.733l-9 5.192v10.395l9-5.203zm-11 15.58V12.577l-9-5.194V17.7z"></svg:path>`,
})
export class TdesignControlPlatformFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
