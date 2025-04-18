import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFontIcon],svg[material-icon-theme-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M24 28h4L18 4h-4L4 28h4l8-19.422"></svg:path><svg:path fill="#f44336" d="M8 20h16v4H8z"></svg:path>`,
})
export class MaterialIconThemeFontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
