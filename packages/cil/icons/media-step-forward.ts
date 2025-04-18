import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMediaStepForwardIcon],svg[cil-media-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328.845 236.582L134.285 92.463A24 24 0 0 0 96 111.749v288.236a23.979 23.979 0 0 0 38.285 19.286l194.56-144.118a24 24 0 0 0 0-38.57ZM128 384.1V127.63l173.119 128.237ZM384 88h32v336h-32z"></svg:path>`,
})
export class CilMediaStepForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
