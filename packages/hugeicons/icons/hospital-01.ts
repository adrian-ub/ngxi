import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHospital01Icon],svg[hugeicons-hospital-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2v2m0 0v2m0-2h-4m0-2v2m0 0v2M3 22V11.38c0-3.503 0-5.255 1.153-6.344C4.886 4.344 5.903 4.092 7.5 4M21 22V11.38c0-3.503 0-5.255-1.153-6.344c-.733-.692-1.75-.944-3.347-1.036M14 10h2m-2 4h2m-9 0h2m-2-4h2M2 22h7.5M22 22h-7.5m-5 0v-2.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 17 11.065 17 12 17s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75V22" color="currentColor"></svg:path>`,
})
export class HugeiconsHospital01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
