import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLayoutIcon],svg[codicon-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2L2 3v10l1 1h4l1-1V3L7 2zm0 11V3h4v10zm7-10l1-1h3l1 1v3l-1 1h-3l-1-1zm1 0v3h3V3zm-1 7l1-1h3l1 1v3l-1 1h-3l-1-1zm1 0v3h3v-3z"></svg:path>`,
})
export class CodiconLayoutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
