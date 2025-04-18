import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentFilledIcon],svg[tdesign-assignment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c-1.19 0-2.24.594-2.872 1.5H2.5v20h19V2h-6.628A3.5 3.5 0 0 0 12 .5M17 7v2H7V7zm0 4v2H7v-2zm-3 6H7v-2h7z"></svg:path>`,
})
export class TdesignAssignmentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
