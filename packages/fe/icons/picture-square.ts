import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePictureSquareIcon],svg[fe-picture-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m3.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M7 14l2-2l2 2l3-3l3 3v3H7z"></svg:path>`,
})
export class FePictureSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
