import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiNodesLeftIcon],svg[gravity-ui-nodes-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2 4a3 3 0 1 1 5.895.79L9.85 5.908a3 3 0 1 1 0 4.185L7.895 11.21A3.003 3.003 0 0 1 5 15a3 3 0 1 1 2.15-5.092L9.105 8.79a3 3 0 0 1 0-1.58L7.15 6.092A3 3 0 0 1 2 4m3 6.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M13.5 8a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiNodesLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
