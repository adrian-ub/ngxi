import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedAltFillIcon],svg[si-edit-detailed-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.425 4.575a2.5 2.5 0 0 0-3.536 0l-1.06 1.061l3.535 3.536l1.06-1.061a2.5 2.5 0 0 0 0-3.536m-5.303 1.768l3.536 3.536l-8.839 8.838a.5.5 0 0 1-.255.137l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.536a.5.5 0 0 1 .137-.255z"></svg:path>`,
})
export class SiEditDetailedAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
