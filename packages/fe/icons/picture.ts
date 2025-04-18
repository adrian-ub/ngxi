import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePictureIcon],svg[fe-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v12h16V6zm0-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m3.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M7 14l2-2l2 2l4-4l3 3v3H7z"></svg:path>`,
})
export class FePictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
