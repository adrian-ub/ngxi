import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPictureOutlineIcon],svg[lsicon-picture-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.5 6L8 11.5l-3-3L2.5 11m0-8.5h11v11h-11zM5 4.99h.01V5H5zm.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class LsiconPictureOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
