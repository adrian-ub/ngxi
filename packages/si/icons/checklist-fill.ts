import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChecklistFillIcon],svg[si-checklist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.707 6.707a1 1 0 0 0-1.414-1.414L4 8.586L2.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM12 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-3.293 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 16.586l3.293-3.293a1 1 0 0 1 1.414 0M12 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class SiChecklistFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
