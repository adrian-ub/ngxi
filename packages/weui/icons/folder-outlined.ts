import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiFolderOutlinedIcon],svg[weui-folder-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.8 9V6.7H10.204L8.33 5.2H3.2V9zm0 1.2H3.2v8.6h17.6zM3 4h5.75l1.875 1.5H21a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class WeuiFolderOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
