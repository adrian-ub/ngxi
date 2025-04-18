import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsNodesIcon],svg[grommet-icons-nodes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM7 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm14-8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class GrommetIconsNodesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
