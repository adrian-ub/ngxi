import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsShareAndroidIcon],svg[pepicons-share-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm9-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" clip-rule="evenodd"></svg:path><svg:path d="m6.236 9.777l-.763-1.291l6.791-4.013l.763 1.291l-6.791 4.013Zm6.021 5.752l.772-1.286l-6.286-3.772l-.772 1.286l6.286 3.772Z"></svg:path></svg:g>`,
})
export class PepiconsShareAndroidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
