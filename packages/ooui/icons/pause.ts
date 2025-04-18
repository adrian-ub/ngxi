import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPauseIcon],svg[ooui-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="16" x="3" y="2" fill="currentColor" rx="1"></svg:rect><svg:rect width="6" height="16" x="11" y="2" fill="currentColor" rx="1"></svg:rect>`,
})
export class OouiPauseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
