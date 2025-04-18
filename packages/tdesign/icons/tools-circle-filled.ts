import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignToolsCircleFilledIcon],svg[tdesign-tools-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m-.374-8.547l4.065 4.066l2.829-2.829l-4.066-4.065a4.5 4.5 0 0 0-6.05-5.57l-.369.16l.157.81l2.088 2.087l-1.166 1.166L7.026 8.19l-.81-.156l-.159.368a4.501 4.501 0 0 0 5.569 6.051"></svg:path>`,
})
export class TdesignToolsCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
