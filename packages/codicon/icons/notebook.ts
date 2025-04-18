import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconNotebookIcon],svg[codicon-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2 2l1-1h9l1 1v12l-1 1H3l-1-1zm1 0v12h9V2zm1 2l1-1h5l1 1v1l-1 1H5L4 5zm1 0v1h5V4zm10 1h-1v2h1zm-1 3h1v2h-1zm1 3h-1v2h1z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconNotebookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
