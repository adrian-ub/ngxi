import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDiffSingleIcon],svg[codicon-diff-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.71 1.289l3 3l.29.71v9l-1 1H4l-1-1v-12l1-1h6zM4 13.999h9v-9l-3-3H4zm4-8H6v1h2v2h1v-2h2v-1H9v-2H8zm-2 5h5v1H6z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDiffSingleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
