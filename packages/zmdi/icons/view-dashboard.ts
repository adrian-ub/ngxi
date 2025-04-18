import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewDashboardIcon],svg[zmdi-view-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 213V0h171v213zm0 171V256h171v128zm213 0V171h171v213zm0-384h171v128H213z"></svg:path>`,
})
export class ZmdiViewDashboardIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
