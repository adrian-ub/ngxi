import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCopyIcon],svg[codicon-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m4 4l1-1h5.414L14 6.586V14l-1 1H5l-1-1zm9 3l-3-3H5v10h8z"></svg:path><svg:path d="M3 1L2 2v10l1 1V2h6.414l-1-1z"></svg:path></svg:g>`,
})
export class CodiconCopyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
