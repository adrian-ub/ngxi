import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureClickIcon],svg[tdesign-gesture-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5v3.414h-2V.5zM5 3.085l2.414 2.414L6 6.913L3.586 4.5zm13.414 1.414L16 6.913L14.586 5.5L17 3.085zM11 6.81a.756.756 0 0 0-.756.756v10.031l-4.498-1l-.1.151l3.424 4.456a.76.76 0 0 0 .6.295h7.086a.76.76 0 0 0 .718-.517l1.782-5.35a.76.76 0 0 0-.336-.894l-3.625-2.115a.76.76 0 0 0-.381-.103h-3.159V7.566A.756.756 0 0 0 11 6.81m-2.756.756a2.756 2.756 0 0 1 5.511 0v2.954h1.159c.488 0 .968.13 1.39.375l3.624 2.116a2.76 2.76 0 0 1 1.226 3.252l-1.783 5.35a2.76 2.76 0 0 1-2.615 1.886H9.67a2.76 2.76 0 0 1-2.185-1.076L3.187 16.83l.94-1.412a1.88 1.88 0 0 1 1.972-.792l2.145.477z"></svg:path>`,
})
export class TdesignGestureClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
