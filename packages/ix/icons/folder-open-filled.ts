import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderOpenFilledIcon],svg[ix-folder-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h151.958v63.959H116.651L44.004 426.667h-1.337V85.333zm-72.636 149.288l330.757.004l-58.287 192.041H88.667z"></svg:path>`,
})
export class IxFolderOpenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
