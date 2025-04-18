import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCodesandboxIcon],svg[meteor-icons-codesandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2l9 5v10l-9 5l-9-5V7zM3 7l9 5l9-5m-9 5v10M3 11.7l5 2.8v5.3m13-8.1l-5 2.8v5.3m-9-15l5 2.7l5-2.7"></svg:path>`,
})
export class MeteorIconsCodesandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
