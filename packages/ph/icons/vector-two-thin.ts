import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoThinIcon],svg[ph-vector-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 194.83l-32 32a4 4 0 0 1-5.66-5.66L214.34 196H80a4 4 0 0 1-4-4V49.66L50.83 74.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L84 49.66V188h130.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhVectorTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
