import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsPIcon],svg[vs-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1408h384V896h320q198 0 322.5-119T1151 448t-124.5-329T704 0zm384 640V256h192q89 0 140.5 48.5T768 448t-53.5 143.5T576 640z"></svg:path>`,
})
export class VsPIcon {
  readonly viewBox = input("0 0 1152 1408")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
