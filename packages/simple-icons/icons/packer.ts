import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPackerIcon],svg[simple-icons-packer-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.844 0v3.38l5.75 3.32v10.148l2.705 1.552c1.676.967 3.045.388 3.045-1.285V9.668c-.014-1.687-1.382-3.832-3.059-4.799zM4.656 2.932v16.574L12.436 24V7.426z"></svg:path>`,
})
export class SimpleIconsPackerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
