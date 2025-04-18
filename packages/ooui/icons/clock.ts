import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiClockIcon],svg[ooui-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0m2.5 14.5L9 11V4h2v6l3 3z"></svg:path>`,
})
export class OouiClockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
