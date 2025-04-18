import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiWindowIcon],svg[ooui-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2h16v12H2z"></svg:path><svg:path fill="currentColor" d="M4 6h12v2H4z"></svg:path>`,
})
export class OouiWindowIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
