import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureRightSlipFilledIcon],svg[tdesign-gesture-right-slip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.22 6.224C8.142 2.302 14.289 1.961 18.598 5.2h-2.1v2h4.985l.003-5.699l-2-.001l-.001 1.872C14.41-.21 7.347.27 2.805 4.81l-.706.707l1.414 1.414z"></svg:path><svg:path fill="currentColor" d="M12 4.81a2.26 2.26 0 0 0-2.26 2.26v8.064l-2.676-.53a1.88 1.88 0 0 0-1.927.802l-.95 1.425l4.299 5.592a2.76 2.76 0 0 0 2.185 1.076h7.086c1.187 0 2.24-.76 2.615-1.885l1.783-5.35a2.76 2.76 0 0 0-1.226-3.253l-3.625-2.116a2.76 2.76 0 0 0-1.39-.375h-1.653V7.07A2.26 2.26 0 0 0 12 4.81"></svg:path>`,
})
export class TdesignGestureRightSlipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
