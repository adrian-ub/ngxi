import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiInfoIcon],svg[ooui-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a6 6 0 1 0 12 0a6 6 0 0 0-12 0m6-8a8 8 0 1 1 0 16a8 8 0 0 1 0-16m1 7v5H9V9zm0-1V6H9v2z"></svg:path>`,
})
export class OouiInfoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
