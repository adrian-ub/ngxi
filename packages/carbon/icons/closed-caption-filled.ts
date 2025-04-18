import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonClosedCaptionFilledIcon],svg[carbon-closed-caption-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-13 7h-5v6h5v2h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5Zm10 0h-5v6h5v2h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5Z"></svg:path>`,
})
export class CarbonClosedCaptionFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
