import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoShareAlternitiveIcon],svg[entypo-share-alternitive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13h2V4h2l-3-4l-3 4h2zm8-6h-3v2h2v9H4V9h2V7H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class EntypoShareAlternitiveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
