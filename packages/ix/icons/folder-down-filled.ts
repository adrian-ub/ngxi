import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderDownFilledIcon],svg[ix-folder-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm56.522 85.333h-42.667v129.819L185.69 251.58l-30.17 30.17l100.42 100.42l100.417-100.42l-30.17-30.17l-48.916 48.905z"></svg:path>`,
})
export class IxFolderDownFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
