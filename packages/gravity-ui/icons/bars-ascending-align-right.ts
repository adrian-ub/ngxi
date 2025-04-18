import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsAscendingAlignRightIcon],svg[gravity-ui-bars-ascending-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 12.75a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 .75.75M15 8a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1 0-1.5h8.5A.75.75 0 0 1 15 8m-.75-4a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsAscendingAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
