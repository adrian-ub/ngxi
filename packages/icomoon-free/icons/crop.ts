import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCropIcon],svg[icomoon-free-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 4l3-3l-1-1l-3 3H5V0H3v3H0v2h3v8h8v3h2v-3h3v-2h-3zM5 5h5l-5 5zm1 6l5-5v5z"></svg:path>`,
})
export class IcomoonFreeCropIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
