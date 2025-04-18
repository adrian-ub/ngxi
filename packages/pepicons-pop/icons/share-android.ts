import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopShareAndroidIcon],svg[pepicons-pop-share-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m9-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path d="m6.236 9.777l-.763-1.291l6.791-4.013l.763 1.291zm6.021 5.752l.772-1.286l-6.286-3.772l-.772 1.286z"></svg:path></svg:g>`,
})
export class PepiconsPopShareAndroidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
