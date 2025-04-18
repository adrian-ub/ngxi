import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunctionThinIcon],svg[ph-function-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 40a4 4 0 0 1-4 4h-29.29a28 28 0 0 0-27.55 23l-10.37 57H184a4 4 0 0 1 0 8h-52.66l-10.63 58.44A36 36 0 0 1 85.29 220H56a4 4 0 0 1 0-8h29.29a28 28 0 0 0 27.55-23l10.37-57H72a4 4 0 0 1 0-8h52.66l10.63-58.44A36 36 0 0 1 170.71 36H200a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFunctionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
