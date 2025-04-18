import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiMaxWindowFilledIcon],svg[weui-max-window-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 15v5a1 1 0 0 1-1 1h-5v-2h4v-4zM9 3v2H5v4H3V4a1 1 0 0 1 1-1zm8.584 2H15V3h5a1 1 0 0 1 1 1v5h-2V6.414l-4.366 4.364l-1.414-1.414zM6.416 18.998H9v2H4a1 1 0 0 1-1-1v-5h2v2.587l4.366-4.365l1.414 1.414z"></svg:path>`,
})
export class WeuiMaxWindowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
