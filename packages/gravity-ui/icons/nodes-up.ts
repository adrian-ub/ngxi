import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesUpIcon],svg[gravity-ui-nodes-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M4 2a3 3 0 1 0 .79 5.895L5.908 9.85a3 3 0 1 0 4.185 0l1.117-1.955A3.003 3.003 0 0 0 15 5a3 3 0 1 0-5.092 2.15L8.79 9.105a3 3 0 0 0-1.58 0L6.092 7.15A3 3 0 0 0 4 2m6.5 3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
