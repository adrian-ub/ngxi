import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiTaskIcon],svg[oi-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v7h7V3.41l-1 1V6H1V1h3.59l1-1zm7 0L4 3L3 2L2 3l2 2l4-4z"></svg:path>`,
})
export class OiTaskIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
