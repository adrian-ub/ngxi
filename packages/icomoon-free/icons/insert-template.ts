import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeInsertTemplateIcon],svg[icomoon-free-insert-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v1H6zm3 0h2v1H9zm5 0v4h-3V6h2V4h-1V3zM5 6h2v1H5zm3 0h2v1H8zM3 4v2h1v1H2V3h3v1zm3 5h2v1H6zm3 0h2v1H9zm5 0v4h-3v-1h2v-2h-1V9zm-9 3h2v1H5zm3 0h2v1H8zm-5-2v2h1v1H2V9h3v1zm12-9H1v14h14zm1-1v16H0V0z"></svg:path>`,
})
export class IcomoonFreeInsertTemplateIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
