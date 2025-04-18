import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPictureInPictureBottomRightIcon],svg[mdi-picture-in-picture-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-8v6h8zm4 8V5c0-1.12-.9-2-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2m-2 0H3V4.97h18z"></svg:path>`,
})
export class MdiPictureInPictureBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
