import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopShareAndroidCircleOffIcon],svg[pepicons-pop-share-android-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m9-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path d="m9.236 12.777l-.763-1.291l6.791-4.013l.763 1.291zm6.021 5.752l.772-1.286l-6.286-3.772l-.772 1.286z"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopShareAndroidCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
