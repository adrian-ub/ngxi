import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTestTubeEmptyIcon],svg[mdi-test-tube-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v2h-1v14a4 4 0 0 1-4 4a4 4 0 0 1-4-4V4H7zm7 2h-4v14a2 2 0 0 0 2 2a2 2 0 0 0 2-2z"></svg:path>`,
})
export class MdiTestTubeEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
