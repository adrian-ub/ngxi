import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixConversationFilledIcon],svg[ix-conversation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.334v213.333h42.666v64l106.667-64h21.333V149.334h64v-64zm426.666 298.667V170.667H234.667v213.334H320l106.667 64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxConversationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
