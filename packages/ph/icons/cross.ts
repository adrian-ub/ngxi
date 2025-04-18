import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCrossIcon],svg[ph-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72h-40V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v40H56a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h40v88a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-88h40a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 48h-48a8 8 0 0 0-8 8v96h-32v-96a8 8 0 0 0-8-8H56V88h48a8 8 0 0 0 8-8V32h32v48a8 8 0 0 0 8 8h48Z"></svg:path>`,
})
export class PhCrossIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
