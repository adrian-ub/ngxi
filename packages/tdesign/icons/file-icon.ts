import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileIconIcon],svg[tdesign-file-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V11h-2V9h-6V3H5v18h16v2H3zm12 2.414V7h3.586zM8 12v8H6v-8zm.5 2a2 2 0 0 1 2-2H12v2h-1.5v4H12v2h-1.5a2 2 0 0 1-2-2zm4 0a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zm5.5-2h3a2 2 0 0 1 2 2v6h-2v-6h-1v6h-2zm-3.5 2v4h1v-4z"></svg:path>`,
})
export class TdesignFileIconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
