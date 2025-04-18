import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLoadingfourIcon],svg[whh-loadingfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M64 512q0 91 35.5 174T195 829t143 95.5T512 960V64q-91 0-174 35.5T195 195T99.5 338T64 512"></svg:path>`,
})
export class WhhLoadingfourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
