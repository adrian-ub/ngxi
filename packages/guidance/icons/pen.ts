import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePenIcon],svg[guidance-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 22.5h13M3.5 16L18 1.5A4.5 4.5 0 0 1 22.5 6L8 20.5H7c-1.974 0-3.377.584-5.02 1.68l-.48.32l.32-.48C2.917 20.376 3.5 18.973 3.5 17z"></svg:path>`,
})
export class GuidancePenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
