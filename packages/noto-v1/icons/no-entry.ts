import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1NoEntryIcon],svg[noto-v1-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M15.58 51.47h96.83v25.05H15.58z"></svg:path><svg:path fill="#ed6c30" d="M64 .57C28.96.57.57 28.97.57 64c0 35.04 28.39 63.43 63.43 63.43c35.02 0 63.43-28.4 63.43-63.43S99.02.57 64 .57M15.58 76.53V51.47h96.83v25.05H15.58z"></svg:path>`,
})
export class NotoV1NoEntryIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
