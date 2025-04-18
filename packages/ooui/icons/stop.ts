import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiStopIcon],svg[ooui-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16" height="16" x="2" y="2" fill="currentColor" rx="1"></svg:rect>`,
})
export class OouiStopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
