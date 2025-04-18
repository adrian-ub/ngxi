import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBox3dQuestionMarkIcon],svg[mage-box-3d-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="M18.15 14.714a1.33 1.33 0 0 1 1.452-.755a1.29 1.29 0 0 1 .948.675a1.12 1.12 0 0 1-.654 1.542a.83.83 0 0 0-.533.748v.309"></svg:path><svg:path stroke-linejoin="round" d="M19.34 18.937h.002"></svg:path></svg:g>`,
})
export class MageBox3dQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
