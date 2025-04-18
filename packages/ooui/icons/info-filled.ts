import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiInfoFilledIcon],svg[ooui-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10s10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"></svg:path>`,
})
export class OouiInfoFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
