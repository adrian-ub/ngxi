import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCircleciIcon],svg[gg-circleci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M4.144 13.517a8 8 0 1 0-.006-3l2.59-.01a5.478 5.478 0 1 1 .004 3zM9.522 12a2.478 2.478 0 1 0 4.956 0a2.478 2.478 0 0 0-4.956 0" clip-rule="evenodd"></svg:path>`,
})
export class GgCircleciIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
