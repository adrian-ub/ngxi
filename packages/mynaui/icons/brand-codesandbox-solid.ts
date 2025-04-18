import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandCodesandboxSolidIcon],svg[mynaui-brand-codesandbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 5.25h13.5v13.5H5.25zm1.5 1.5v10.5h10.5V6.75z"></svg:path>`,
})
export class MynauiBrandCodesandboxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
