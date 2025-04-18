import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFoldDownIcon],svg[codicon-fold-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.207 1.707L13.5 1l-6 6l-6-6l-.707.707l6.353 6.354h.708zm0 6L13.5 7l-6 6l-6-6l-.707.707l6.353 6.354h.708z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFoldDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
