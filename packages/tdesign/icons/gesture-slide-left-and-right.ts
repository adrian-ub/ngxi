import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureSlideLeftAndRightIcon],svg[tdesign-gesture-slide-left-and-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.399 5.2c3.898-2.93 9.3-2.93 13.199 0h-2.1v2h4.986l.002-5.699l-2-.001v1.872a13.01 13.01 0 0 0-14.973 0V1.5h-2v5.7h4.985v-2zm3.845 2.366a2.756 2.756 0 1 1 5.511 0v2.954h1.159c.488 0 .968.13 1.39.375l3.624 2.116a2.76 2.76 0 0 1 1.226 3.252l-1.783 5.35a2.76 2.76 0 0 1-2.615 1.886h-7.085a2.76 2.76 0 0 1-2.186-1.076L4.187 16.83l.94-1.412a1.88 1.88 0 0 1 1.972-.792l2.145.477zM12 6.81a.756.756 0 0 0-.756.756v10.031l-4.498-1l-.1.151l3.424 4.456a.76.76 0 0 0 .6.295h7.086a.76.76 0 0 0 .718-.517l1.782-5.35a.76.76 0 0 0-.336-.894l-3.625-2.115a.76.76 0 0 0-.381-.103h-3.159V7.566A.756.756 0 0 0 12 6.81"></svg:path>`,
})
export class TdesignGestureSlideLeftAndRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
