import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixConversationIcon],svg[ix-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 362.667v-64H42.667V85.334h234.666v64h-42.666v-21.333H85.333v128H128v31.309l52.182-31.309h33.151v42.666H192zm384 21.334h-42.666v64l-106.667-64h-85.333V170.667h234.666zM384 341.334v31.309l-52.182-31.309h-54.485v-128h149.334v128z" clip-rule="evenodd"></svg:path>`,
})
export class IxConversationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
