import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixImageIcon],svg[ix-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 448V64h384v384zm109.227-198.4l-66.561 106.948v48.785h298.667v-33.92l-64-64l-65.493 65.494zm232.106-142.934H106.666v169.211l61.44-98.81l110.72 132.693l62.507-62.507l64 64zm-96 42.667c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class IxImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
