import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExtensionIcon],svg[tdesign-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a3 3 0 0 1 6 0h6v6a3 3 0 1 1 0 6v6h-6.403l-.122-.858a2.5 2.5 0 0 0-4.95 0L8.403 22H2v-6.403l.858-.122a2.5 2.5 0 0 0 0-4.95L2 10.403V4zm3-1a1 1 0 0 0-1 1v2H4v2.756a4.501 4.501 0 0 1 0 8.488V20h2.756a4.501 4.501 0 0 1 8.488 0H18v-6h2a1 1 0 1 0 0-2h-2V6h-6V4a1 1 0 0 0-1-1"></svg:path>`,
})
export class TdesignExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
