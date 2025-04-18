import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCodeOssIcon],svg[codicon-code-oss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 2h1v11H5zm2 1h4v1H7zm2 2h4v1H9zm0 2h4v1H9zm0 2h4v1H9zm-2 2h4v1H7z"></svg:path><svg:path d="M2 1L1 2v5h1V2h12v11H2V7H1v6l1 1h12l1-1V2l-1-1z"></svg:path></svg:g>`,
})
export class CodiconCodeOssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
