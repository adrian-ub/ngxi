import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditWriteCircleChangeCircleEditModifyPencilWriteWritingIcon],svg[streamline-interface-edit-write-circle-change-circle-edit-modify-pencil-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 7A6.5 6.5 0 1 1 7 .5"></svg:path><svg:path d="m10.5.5l-5 5l-1 4l4-1l5-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditWriteCircleChangeCircleEditModifyPencilWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
