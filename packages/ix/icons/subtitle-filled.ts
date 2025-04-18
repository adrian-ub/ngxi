import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSubtitleFilledIcon],svg[ix-subtitle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333v341.334h426.666V85.333zm85.546 128h64.213V256h-64.213zm106.24 0h149.76V256h-149.76zm-106.88 85.334h149.76v42.666h-149.76zm192.426 0h64.214v42.666h-64.214z" clip-rule="evenodd"></svg:path>`,
})
export class IxSubtitleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
