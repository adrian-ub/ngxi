import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNeovimIcon],svg[simple-icons-neovim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.214 4.954v13.615L7.655 24V10.314L3.312 3.845zm4.999 17.98l-4.557-4.548V5.136l.59-.596l3.967 5.908v12.485zm14.573-4.457l-.862.937l-4.24-6.376V0l5.068 5.092zM7.431.001l12.998 19.835l-3.637 3.637L3.787 3.683L7.43 0z"></svg:path>`,
})
export class SimpleIconsNeovimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
