import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureRightSlipIcon],svg[tdesign-gesture-right-slip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.598 5.2C14.288 1.961 8.142 2.302 4.22 6.224l-.707.707L2.1 5.517l.707-.707C7.346.27 14.411-.21 19.486 3.372V1.5l2 .001l-.002 5.7h-4.986v-2zM9.244 7.566a2.756 2.756 0 0 1 5.511 0v2.954h1.159c.488 0 .968.13 1.39.375l3.624 2.116a2.76 2.76 0 0 1 1.226 3.252l-1.783 5.35a2.76 2.76 0 0 1-2.615 1.886h-7.085a2.76 2.76 0 0 1-2.186-1.076L4.187 16.83l.94-1.412a1.88 1.88 0 0 1 1.972-.792l2.145.477zM12 6.81a.756.756 0 0 0-.756.756v10.031l-4.498-1l-.1.151l3.424 4.456a.76.76 0 0 0 .6.295h7.086a.76.76 0 0 0 .718-.517l1.782-5.35a.76.76 0 0 0-.336-.894l-3.625-2.115a.76.76 0 0 0-.381-.103h-3.159V7.566A.756.756 0 0 0 12 6.81"></svg:path>`,
})
export class TdesignGestureRightSlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
