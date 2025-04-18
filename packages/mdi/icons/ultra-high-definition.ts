import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUltraHighDefinitionIcon],svg[mdi-ultra-high-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v4h2V7h2v10h-2v-4h-2v4H9zm8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3zm3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6zM7 14a3 3 0 0 1-3 3a3 3 0 0 1-3-3V7h2v7a1 1 0 0 0 1 1a1 1 0 0 0 1-1V7h2z"></svg:path>`,
})
export class MdiUltraHighDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
