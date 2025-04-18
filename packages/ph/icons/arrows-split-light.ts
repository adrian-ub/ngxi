import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsSplitLightIcon],svg[ph-arrows-split-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 188.24l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L186 201.51v-63l-58-58l-58 58v63l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L58 201.51V136a6 6 0 0 1 1.76-4.24L122 69.51V24a6 6 0 0 1 12 0v45.51l62.24 62.25A6 6 0 0 1 198 136v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowsSplitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
