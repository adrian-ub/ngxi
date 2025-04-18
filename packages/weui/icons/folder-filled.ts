import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiFolderFilledIcon],svg[weui-folder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h5.75l1.875 1.5H21a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m.5 5v1.5h17V9z"></svg:path>`,
})
export class WeuiFolderFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
