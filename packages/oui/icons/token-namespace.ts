import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenNamespaceIcon],svg[oui-token-namespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.556 8.416l-.804-1.68h-.036v5.64H5V4h1.992l2.292 3.96l.804 1.68h.036V4h1.716v8.376H9.848z"></svg:path>`,
})
export class OuiTokenNamespaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
