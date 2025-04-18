import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSendMessageOutlineIcon],svg[bubbles-send-message-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M.989 13.767a1.017 1.017 0 0 1 .073-1.779L23.5.5l-5.427 22.213a1.03 1.03 0 0 1-.623.711a1.06 1.06 0 0 1-.951-.082z"></svg:path><svg:path d="M11.481 20.245L8.376 23.35a.513.513 0 0 1-.876-.363v-5.2L23.5.5"></svg:path></svg:g>`,
})
export class BubblesSendMessageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
