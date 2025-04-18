import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesDownIcon],svg[gravity-ui-nodes-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 11a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 14a3 3 0 1 0-.79-5.895L10.092 6.15a3 3 0 1 0-4.185 0L4.79 8.105A3.003 3.003 0 0 0 1 11a3 3 0 1 0 5.092-2.15L7.21 6.895a3 3 0 0 0 1.58 0L9.908 8.85A3 3 0 0 0 12 14m-6.5-3a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M8 2.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
