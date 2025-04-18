import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPictureInPicture2FillIcon],svg[ri-picture-in-picture-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043l-2.25-2.25z"></svg:path>`,
})
export class RiPictureInPicture2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
