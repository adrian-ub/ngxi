import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWindowMaximizeIcon],svg[uim-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h20v2H2z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M2 10h20v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" opacity=".5"></svg:path>`,
})
export class UimWindowMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
