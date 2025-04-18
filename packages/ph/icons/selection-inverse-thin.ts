import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseThinIcon],svg[ph-selection-inverse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 216a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8M220 48v160a12 12 0 0 1-12 12h-24a4 4 0 0 1 0-8h22.34L44 49.66V72a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-12-4H49.66L212 206.34V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSelectionInverseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
