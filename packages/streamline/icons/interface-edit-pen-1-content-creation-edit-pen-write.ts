import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen1ContentCreationEditPenWriteIcon],svg[streamline-interface-edit-pen-1-content-creation-edit-pen-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 13.5l2-2m2.21.79a1 1 0 0 1-1.42 0l-1.58-1.58a1 1 0 0 1 0-1.42l8.17-8.17a2.12 2.12 0 0 1 3 3Z"></svg:path><svg:path d="M11.5 5.5L7.21 1.21a1 1 0 0 0-1.42 0L2.5 4.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen1ContentCreationEditPenWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
