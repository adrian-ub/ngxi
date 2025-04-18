import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiNoteFilledIcon],svg[weui-note-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 18.946q-.24.062-.5.063H5.5V20.5H18a.5.5 0 0 0 .5-.5zM4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4zm3 1.5v14h1.5v-14z"></svg:path>`,
})
export class WeuiNoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
