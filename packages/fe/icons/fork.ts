import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feForkIcon],svg[fe-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 7.83V12h3a3 3 0 0 0 3-3V7.83a3.001 3.001 0 1 1 2 0V9a5 5 0 0 1-5 5H9v2.17a3.001 3.001 0 1 1-2 0V7.83a3.001 3.001 0 1 1 2 0M8 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2M8 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FeForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
