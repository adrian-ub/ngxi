import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWindowMinimizeIcon],svg[cil-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 448h416v32H48z"></svg:path>`,
})
export class CilWindowMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
