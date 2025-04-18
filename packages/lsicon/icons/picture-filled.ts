import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPictureFilledIcon],svg[lsicon-picture-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm5.854 9.854L13 7.207V13H3v-1.793l2-2l2.646 2.647a.5.5 0 0 0 .708 0M5 3.99a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPictureFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
