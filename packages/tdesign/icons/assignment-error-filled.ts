import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentErrorFilledIcon],svg[tdesign-assignment-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2h6.628A3.5 3.5 0 0 1 12 .5m1 13v-6h-2v6zm.004 1.496H11V17h2.004z"></svg:path>`,
})
export class TdesignAssignmentErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
