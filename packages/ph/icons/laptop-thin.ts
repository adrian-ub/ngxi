import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLaptopThinIcon],svg[ph-laptop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 172h-12V72a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v100H24a4 4 0 0 0-4 4v16a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20v-16a4 4 0 0 0-4-4M44 72a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v100H44Zm184 120a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-12h200ZM148 88a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhLaptopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
