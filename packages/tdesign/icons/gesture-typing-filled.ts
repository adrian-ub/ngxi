import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureTypingFilledIcon],svg[tdesign-gesture-typing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4M4 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m14 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7-.689a2.26 2.26 0 0 0-2.26 2.26v8.064l-2.677-.53a1.88 1.88 0 0 0-1.927.802l-.95 1.425l4.299 5.592A2.76 2.76 0 0 0 9.67 24h7.086c1.187 0 2.24-.76 2.615-1.885l1.783-5.35a2.76 2.76 0 0 0-1.226-3.253l-3.625-2.116a2.76 2.76 0 0 0-1.39-.376H13.26V7.572A2.26 2.26 0 0 0 11 5.311"></svg:path>`,
})
export class TdesignGestureTypingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
