import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowMaximizeIcon],svg[zmdi-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21h341v342H0zm43 86v213h256V107z"></svg:path>`,
})
export class ZmdiWindowMaximizeIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
