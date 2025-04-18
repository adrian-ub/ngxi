import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoUntagIcon],svg[entypo-untag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 14.742l4.945-.709L5.239 19l5.962-5.985l-4.069-4.429zm17.664-9.221c.391-.393.5-.945 0-1.419l-2.826-2.839c-.279-.308-1.021-.392-1.412 0l-3.766 3.78l4.068 4.429zm.042 9.772l-14.001-14a.999.999 0 1 0-1.414 1.414l14.001 14a.996.996 0 0 0 1.414 0a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class EntypoUntagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
