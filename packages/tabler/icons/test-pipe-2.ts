import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTestPipe2Icon],svg[tabler-test-pipe-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3v15a3 3 0 0 1-6 0V3m0 9h6M8 3h8"></svg:path>`,
})
export class TablerTestPipe2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
