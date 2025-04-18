import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlipverticalIcon],svg[whh-flipvertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 1024H0V576h1024v64zM0 0h64l960 384v64H0zm64 384h800L64 64z"></svg:path>`,
})
export class WhhFlipverticalIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
