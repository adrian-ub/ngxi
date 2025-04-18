import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggExtensionAltIcon],svg[gg-extension-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5v14h8v-6h6V5zm6 2H7v4h4zm0 6H7v4h4zm2-2h4V7h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgExtensionAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
