import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDiffRemovedIcon],svg[codicon-diff-removed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 7v1H5V7z"></svg:path><svg:path fill-rule="evenodd" d="M1.5 1h12l.5.5v12l-.5.5h-12l-.5-.5v-12zM2 13h11V2H2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconDiffRemovedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
