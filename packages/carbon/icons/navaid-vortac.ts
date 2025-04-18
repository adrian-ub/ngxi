import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNavaidVortacIcon],svg[carbon-navaid-vortac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m29.868 10.504l-4-7a1 1 0 0 0-1.383-.361L19.723 6h-7.446L7.515 3.143a1 1 0 0 0-1.383.36l-4 7a1 1 0 0 0 .353 1.354l4.776 2.866L11 21.266V27a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5.734l3.739-6.543l4.776-2.866a1 1 0 0 0 .353-1.353M18.848 21h-5.696l-4.576-8.008L11.429 8h9.142l2.853 4.992Z"></svg:path>`,
})
export class CarbonNavaidVortacIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
