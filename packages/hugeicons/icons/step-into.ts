import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStepIntoIcon],svg[hugeicons-step-into-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 14l1.586 1.84c.666.773 1 1.16 1.414 1.16s.748-.387 1.414-1.16L15 14"></svg:path><svg:path d="M12 16.5V12c0-3.771 0-5.657-1.172-6.828S7.771 4 4 4H3m0 16h6m6 0h6"></svg:path></svg:g>`,
})
export class HugeiconsStepIntoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
