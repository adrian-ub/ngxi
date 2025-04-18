import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderFilledIcon],svg[ix-folder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.666H42.667V85.333H220.75L274.709 128h194.625z"></svg:path>`,
})
export class IxFolderFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
