import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPictureInPictureFilledIcon],svg[tabler-picture-in-picture-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 4a3 3 0 0 1 3 3v4a1 1 0 0 1-2 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"></svg:path><svg:path d="M20 13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></svg:path></svg:g>`,
})
export class TablerPictureInPictureFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
