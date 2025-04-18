import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentUserFilledIcon],svg[tdesign-assignment-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c-1.19 0-2.24.594-2.872 1.5H2.5v20h19V2h-6.628A3.5 3.5 0 0 0 12 .5m-3 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0M6 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H6z"></svg:path>`,
})
export class TdesignAssignmentUserFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
