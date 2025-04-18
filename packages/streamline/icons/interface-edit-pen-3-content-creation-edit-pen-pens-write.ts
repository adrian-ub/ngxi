import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen3ContentCreationEditPenPensWriteIcon],svg[streamline-interface-edit-pen-3-content-creation-edit-pen-pens-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3a2.5 2.5 0 0 0-5 0v7.5l2.5 3l2.5-3Zm-5 1.5h5m2-2a2 2 0 0 1 4 0v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm2 9v2"></svg:path><svg:path d="M7.5 4.5h5a1 1 0 0 1 1 1v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen3ContentCreationEditPenPensWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
