import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiDieIcon],svg[ooui-die-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm2 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2M5 7a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5 5a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5 5a2 2 0 1 1 2-2a2 2 0 0 1-2 2m0-10a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class OouiDieIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
