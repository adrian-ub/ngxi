import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPictureOffFilledIcon],svg[lsicon-picture-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2 2.707l-.854-.853l.708-.708l13 13l-.707.708l-.854-.854H2.5a.5.5 0 0 1-.5-.5zm7.75 7.75l-1.396 1.397a.5.5 0 0 1-.708 0L5 9.207l-2 2V13h9.293zm.703-2.117L4.629 2H13.5a.5.5 0 0 1 .5.5v8.849h-1V7.207l-1.84 1.84z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPictureOffFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
