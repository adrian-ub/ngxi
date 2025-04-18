import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPatientIcon],svg[hugeicons-patient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 22v-3c0-2.828 0-4.243-.879-5.121C18.243 13 16.828 13 14 13h-4c-2.828 0-4.243 0-5.121.879C4 14.757 4 16.172 4 19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 22 6.068 22 7 22m2.5-9l3 9M7 13.5V22"></svg:path><svg:path d="M12 19h2.5a1.5 1.5 0 0 1 0 3h-2m3-15.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0"></svg:path></svg:g>`,
})
export class HugeiconsPatientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
