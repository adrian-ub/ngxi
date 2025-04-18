import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTestPipe2FilledIcon],svg[tabler-test-pipe-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a1 1 0 0 1 0 2v14a4 4 0 1 1-8 0V4a1 1 0 1 1 0-2zm-2 2h-4v7h4z"></svg:path>`,
})
export class TablerTestPipe2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
