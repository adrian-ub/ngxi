import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biDropboxIcon],svg[bi-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.01 4.555L4.005 7.11L8.01 9.665L4.005 12.22L0 9.651l4.005-2.555L0 4.555L4.005 2zm-4.026 8.487l4.006-2.555l4.005 2.555l-4.005 2.555zm4.026-3.39l4.005-2.556L8.01 4.555L11.995 2L16 4.555L11.995 7.11L16 9.665l-4.005 2.555z"></svg:path>`,
})
export class BiDropboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
