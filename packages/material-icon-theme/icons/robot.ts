import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRobotIcon],svg[material-icon-theme-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M25.172 6L28 8.828v14.344L25.172 26H6.828L4 23.172V8.828L6.828 6zM26 4H6L2 8v16l4 4h20l4-4V8z"></svg:path><svg:path fill="#00bfa5" d="M8 20h16v2H8zm0-6v2h2v-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2h2v-2a4 4 0 0 0-4-4a4 4 0 0 0-4 4m9.876.268l5.196-3l1 1.732l-5.196 3z"></svg:path>`,
})
export class MaterialIconThemeRobotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
