import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLoadingfiveIcon],svg[whh-loadingfive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M64 512q0 91 34.5 173T195 829l317-317V64q-91 0-174 35.5T195 195T99.5 338T64 512"></svg:path>`,
})
export class WhhLoadingfiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
