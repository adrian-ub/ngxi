import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesRightIcon],svg[gravity-ui-nodes-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M14 4a3 3 0 1 0-5.895.79L6.15 5.908a3 3 0 1 0 0 4.185l1.955 1.117A3.003 3.003 0 0 0 11 15a3 3 0 1 0-2.15-5.092L6.895 8.79a3 3 0 0 0 0-1.58L8.85 6.092A3 3 0 0 0 14 4m-3 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2.5 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
