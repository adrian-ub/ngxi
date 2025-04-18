import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedicalMaskIcon],svg[hugeicons-medical-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 8.5H8.707c-.453 0-.887.18-1.207.5m6.5-.5h1.293c.453 0 .887.18 1.207.5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7.313 17.92c-.417-1.367-.417-3.47-.001-4.838C7.57 12.234 8.298 12 9.118 12h5.764c.819 0 1.546.233 1.805 1.08c.417 1.368.417 3.472 0 4.84c-.259.847-.986 1.08-1.805 1.08H9.118c-.819 0-1.546-.233-1.805-1.08M7 13.5L2 12m15 1.5l5-1.5M7 17.5L3.5 17m13.5.5l3.5-.5"></svg:path></svg:g>`,
})
export class HugeiconsMedicalMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
