import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLinuxNamespaceIcon],svg[carbon-linux-namespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2h2v28h-2zm-6 23H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2m0-16H6v14h14z"></svg:path>`,
})
export class CarbonLinuxNamespaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
