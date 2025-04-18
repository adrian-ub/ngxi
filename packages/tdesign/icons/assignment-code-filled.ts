import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCodeFilledIcon],svg[tdesign-assignment-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2h6.628A3.5 3.5 0 0 1 12 .5M9.5 8.086L5.586 12L9.5 15.914l1.414-1.414l-2.5-2.5l2.5-2.5zM18.414 12L14.5 8.086L13.086 9.5l2.5 2.5l-2.5 2.5l1.414 1.414z"></svg:path>`,
})
export class TdesignAssignmentCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
