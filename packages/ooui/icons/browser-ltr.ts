import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBrowserLtrIcon],svg[ooui-browser-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2 1.5A1.5 1.5 0 1 1 2.5 5A1.5 1.5 0 0 1 4 3.5M18 16H2V8h16z"></svg:path>`,
})
export class OouiBrowserLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
