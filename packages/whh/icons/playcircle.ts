import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPlaycircleIcon],svg[whh-playcircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-159 0-271.5 112.5T128 512t112.5 271.5T512 896t271.5-112.5T896 512T783.5 240.5T512 128M384 288l384 224l-384 224z"></svg:path>`,
})
export class WhhPlaycircleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
