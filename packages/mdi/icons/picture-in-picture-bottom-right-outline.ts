import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPictureInPictureBottomRightOutlineIcon],svg[mdi-picture-in-picture-bottom-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-8v6h8zm-2 4h-4v-2h4zm4-12H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.12-.9-2-2-2m0 16H3V4.97h18z"></svg:path>`,
})
export class MdiPictureInPictureBottomRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
