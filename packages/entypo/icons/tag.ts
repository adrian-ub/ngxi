import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTagIcon],svg[entypo-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.662 5.521L5.237 19l.707-4.967l-4.945.709L14.424 1.263c.391-.392 1.133-.308 1.412 0l2.826 2.839c.5.473.391 1.026 0 1.419"></svg:path>`,
})
export class EntypoTagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
