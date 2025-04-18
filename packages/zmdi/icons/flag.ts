import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlagIcon],svg[zmdi-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201 64h119v213H171l-9-42H43v149H0V21h192z"></svg:path>`,
})
export class ZmdiFlagIcon {
  readonly viewBox = input("0 0 320 384")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
