import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLeChatIcon],svg[arcticons-le-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.786 21.208v-5.583h5.57V10.04h5.572v22.334H43.5v5.584H26.786v-5.584h5.571v-5.583h-5.571v5.583h-5.572v-5.583h-5.571v5.583h5.571v5.584H4.5v-5.584h5.572V10.041h5.571v5.584h5.571v5.583z"></svg:path>`,
})
export class ArcticonsLeChatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
