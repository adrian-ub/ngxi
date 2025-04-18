import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7UiwindowSplit2x1Icon],svg[f7-uiwindow-split-2x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265M4.129 13.88c0-2.438 1.312-3.68 3.656-3.68h40.43c2.32 0 3.656 1.242 3.656 3.68v6.516H4.129ZM48.215 45.8H29.769V23.746h22.102v18.375c0 2.438-1.336 3.68-3.656 3.68m-40.43 0c-2.344 0-3.656-1.242-3.656-3.68V23.746H26.23v22.055Z"></svg:path>`,
})
export class F7UiwindowSplit2x1Icon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
