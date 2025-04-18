import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureTypingIcon],svg[tdesign-gesture-typing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0M8.244 8.066a2.756 2.756 0 0 1 5.512 0v2.954h1.158c.488 0 .968.13 1.39.375l3.624 2.116a2.76 2.76 0 0 1 1.226 3.252l-1.782 5.35A2.76 2.76 0 0 1 16.756 24H9.671a2.76 2.76 0 0 1-2.186-1.076L3.187 17.33l.94-1.412a1.88 1.88 0 0 1 1.972-.792l2.145.477zM11 7.31a.756.756 0 0 0-.756.756v10.031l-4.498-1l-.1.151l3.425 4.456a.76.76 0 0 0 .6.295h7.085a.76.76 0 0 0 .718-.517l1.782-5.35a.76.76 0 0 0-.336-.894l-3.625-2.115a.76.76 0 0 0-.381-.103h-3.158V8.066A.756.756 0 0 0 11 7.31M2 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignGestureTypingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
