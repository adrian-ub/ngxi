import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShoreIcon],svg[mdi-shore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12h2v2h-2c-1.4 0-2.7-.4-4-1c-2.5 1.3-5.5 1.3-8 0c-1.3.6-2.6 1-4 1H2v-2h2c1.4 0 2.8-.5 4-1.3c2.4 1.7 5.6 1.7 8 0c1.2.8 2.6 1.3 4 1.3m0-6h2v2h-2c-1.4 0-2.7-.3-4-1c-2.5 1.3-5.5 1.3-8 0c-1.3.7-2.6 1-4 1H2V6h2c1.4 0 2.8-.5 4-1.3c2.4 1.7 5.6 1.7 8 0c1.2.8 2.6 1.3 4 1.3m2 14H2v-2h20"></svg:path>`,
})
export class MdiShoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
