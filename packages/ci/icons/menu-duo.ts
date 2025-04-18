import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMenuDuoIcon],svg[ci-menu-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H3v-2h18v2Zm0-6H3V8h18v2Z"></svg:path>`,
})
export class CiMenuDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
