import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSeparatorLineIcon],svg[ix-separator-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 277.333H42.666v-42.666h426.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSeparatorLineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
