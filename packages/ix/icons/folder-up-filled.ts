import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderUpFilledIcon],svg[ix-folder-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm35.791 107.838L156.123 293.693l30.167 30.167l48.918-48.918L234.667 384h42.667l.54-109.055l48.916 48.915l30.166-30.167z"></svg:path>`,
})
export class IxFolderUpFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
