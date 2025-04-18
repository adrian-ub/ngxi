import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineChecklistRtlIcon],svg[ic-outline-checklist-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41l2.12 2.12l4.24-4.24L22 5.34zm0 8l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L22 13.34z"></svg:path>`,
})
export class IcOutlineChecklistRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
