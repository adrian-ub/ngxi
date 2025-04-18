import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsEditPen4LineIcon],svg[majesticons-edit-pen-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 5l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L19 8m-3-3l-5.707 5.707a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h1.586a1 1 0 0 0 .707-.293L19 8m-3-3l3 3M6 14H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4"></svg:path>`,
})
export class MajesticonsEditPen4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
