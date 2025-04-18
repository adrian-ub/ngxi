import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTextDirLtrIcon],svg[ooui-text-dir-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 10l-6-5v4H6v2h7v4zM6 2V1H4.5a1.5 1.5 0 0 0-1 .39a1.5 1.5 0 0 0-1-.39H1v1h1.5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H1v1h1.5a1.5 1.5 0 0 0 1-.39a1.5 1.5 0 0 0 1 .39H6v-1H4.5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class OouiTextDirLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
