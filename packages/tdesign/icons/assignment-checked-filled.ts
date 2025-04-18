import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCheckedFilledIcon],svg[tdesign-assignment-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2h6.628A3.5 3.5 0 0 1 12 .5m-1.414 16.157l7.071-7.071l-1.414-1.414l-5.657 5.656L7.758 11l-1.414 1.414z"></svg:path>`,
})
export class TdesignAssignmentCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
