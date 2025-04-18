import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsTravelCaseIcon],svg[zondicons-travel-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2zm5-1v1h4V4z"></svg:path>`,
})
export class ZondiconsTravelCaseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
