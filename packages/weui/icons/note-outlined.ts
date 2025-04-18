import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiNoteOutlinedIcon],svg[weui-note-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.2 3.2v14.61H18a.8.8 0 0 0 .8-.8V4a.8.8 0 0 0-.8-.8zM7 3.2H5.2v14.61H7zm11.8 15.643a2 2 0 0 1-.8.166H5.2V20.8H18a.8.8 0 0 0 .8-.8zM4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4z"></svg:path>`,
})
export class WeuiNoteOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
