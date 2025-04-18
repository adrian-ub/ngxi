import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsAscendingAlignLeftIcon],svg[gravity-ui-bars-ascending-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12.75c0 .414.336.75.75.75h12.5a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0-.75.75M1 8c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5A.75.75 0 0 0 1 8m.75-4a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsAscendingAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
