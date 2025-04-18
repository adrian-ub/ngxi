import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiContinuityWithinIcon],svg[oui-continuity-within-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9A.5.5 0 0 0 .5 3m14.5.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0zm-4.712 1.547a.5.5 0 0 1 .532.069l3 2.5a.5.5 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 10 10.5V9H6v1.5a.5.5 0 0 1-.82.384l-3-2.5a.5.5 0 0 1 0-.768l3-2.5A.5.5 0 0 1 6 5.5V7h4V5.5a.5.5 0 0 1 .288-.453"></svg:path>`,
})
export class OuiContinuityWithinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
