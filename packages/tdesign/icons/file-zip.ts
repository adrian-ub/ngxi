import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileZipIcon],svg[tdesign-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm2 2v18h14V9h-6V3h-1.996v2.004h-2V7h2v2.004h-2V11h2v2.004h-2v2H7V13h2v-1.996H7V9h2V7.004H7V5h2V3zm10 .414V7h3.586z"></svg:path>`,
})
export class TdesignFileZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
