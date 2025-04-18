import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWorkspaceIcon],svg[ix-workspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zM192 192H85.334v192H192zm234.667 0h-192v192h192zm0-64H85.334v21.333h341.333z"></svg:path>`,
})
export class IxWorkspaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
