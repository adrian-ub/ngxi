import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTestPipeIcon],svg[tabler-test-pipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 8.04L7.878 20.164a2.857 2.857 0 1 1-4.041-4.04L15.959 4M7 13h8m4 2l1.5 1.6a2 2 0 1 1-3 0zM15 3l6 6"></svg:path>`,
})
export class TablerTestPipeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
