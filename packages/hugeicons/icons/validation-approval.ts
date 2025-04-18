import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsValidationApprovalIcon],svg[hugeicons-validation-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18 18.5l.278-1.386c.146-.733.538-1.41.678-2.144q.045-.229.044-.47a2.5 2.5 0 1 0-4.956.47c.14.735.532 1.41.679 2.144L15 18.5m3 0h-3m3 0l2.497.666A1.92 1.92 0 0 1 22 21.04c0 .53-.43.96-.96.96h-9.08a.96.96 0 0 1-.96-.96c0-.9.625-1.679 1.503-1.874L15 18.5M17 9V8c0-2.828 0-4.243-.879-5.121C15.243 2 13.828 2 11 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22"></svg:path><svg:path d="M7 8.667s.625 0 1.25 1.333c0 0 1.985-3.333 3.75-4m-6 8h4m-4 3h4"></svg:path></svg:g>`,
})
export class HugeiconsValidationApprovalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
