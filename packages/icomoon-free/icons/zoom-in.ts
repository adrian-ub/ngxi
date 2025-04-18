import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeZoomInIcon],svg[icomoon-free-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.504 13.616l-3.79-3.223c-.392-.353-.811-.514-1.149-.499a6 6 0 1 0-.672.672c-.016.338.146.757.499 1.149l3.223 3.79c.552.613 1.453.665 2.003.115s.498-1.452-.115-2.003zM6 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8m1-7H5v2H3v2h2v2h2V7h2V5H7z"></svg:path>`,
})
export class IcomoonFreeZoomInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
