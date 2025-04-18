import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopShareAndroidCircleFilledIcon],svg[pepicons-pop-share-android-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopShareAndroidCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m9-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path d="m9.236 12.777l-.763-1.291l6.791-4.013l.763 1.291zm6.021 5.752l.772-1.286l-6.286-3.772l-.772 1.286z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopShareAndroidCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopShareAndroidCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
