import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadicalBoldIcon],svg[ph-radical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 80v24a12 12 0 0 1-24 0V92h-91.68L91.24 212.21a12 12 0 0 1-22.47 0l-48-128a12 12 0 1 1 22.47-8.43l36.76 98l36.77-98A12 12 0 0 1 128 68h112a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhRadicalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
