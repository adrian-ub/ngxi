import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCodeSandboxIcon],svg[grommet-icons-code-sandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m12 1.5l-9 5v11l9 5l9-5v-11zm0 21v-11m9-5l-9 5m0 0l-9-5m18 11V12l-4.5 2.5V20zm-18 0V12l4.5 2.5V20zm9-16L7.5 4L12 6.5L16.5 4z"></svg:path>`,
})
export class GrommetIconsCodeSandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
