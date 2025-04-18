import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleTapSwipeDown24FilledIcon],svg[fluent-double-tap-swipe-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.707 21.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 18.586V9a1 1 0 1 1 2 0v9.586l1.293-1.293a1 1 0 0 1 1.414 1.414zM4.5 9a7.5 7.5 0 0 0 5.5 7.23v-2.105A5.502 5.502 0 0 1 12 3.5a5.5 5.5 0 0 1 2 10.625v2.105A7.5 7.5 0 1 0 4.5 9m3 0a4.5 4.5 0 0 0 2.5 4.032V10.5a2.5 2.5 0 1 1 4 0v2.532A4.5 4.5 0 1 0 7.5 9"></svg:path>`,
})
export class FluentDoubleTapSwipeDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
