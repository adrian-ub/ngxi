import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHighDefinitionIcon],svg[mdi-high-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h2v4h2V7h2v10H9v-4H7v4H5zm8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3zm3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6z"></svg:path>`,
})
export class MdiHighDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
