import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExtensionOffIcon],svg[tdesign-extension-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.99A3 3 0 0 1 14 4h6v6a3 3 0 0 1 .01 6l.05 2.516L18 16.408V14h2a1 1 0 1 0 0-2h-2V6h-6V4a1 1 0 1 0-2 0v2H7.586L5.528 3.942zM1 1.586L22.414 23L21 24.414L18.586 22h-4.988l-.123-.858a2.5 2.5 0 0 0-4.95 0L8.404 22H2v-6.403l.859-.122a2.5 2.5 0 0 0 0-4.95L2 10.403V5.414L-.414 3zm3 5.828v1.342a4.501 4.501 0 0 1 0 8.488V20h2.756a4.501 4.501 0 0 1 8.488 0h1.342z"></svg:path>`,
})
export class TdesignExtensionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
