import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerTapIcon],svg[streamline-one-finger-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.101 13.5v-2.833a2.573 2.573 0 0 0-2.573-2.573H7.294V3.918c0-.664-.539-1.202-1.202-1.202v0c-.664 0-1.203.538-1.203 1.202v5.474l-.4.075a1.715 1.715 0 0 0-1.096 2.659l.161.234l.784 1.14"></svg:path><svg:path d="M2.597 4.932a3.611 3.611 0 1 1 7.034 0"></svg:path></svg:g>`,
})
export class StreamlineOneFingerTapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
