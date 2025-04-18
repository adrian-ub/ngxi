import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMapPinpoint01Icon],svg[hugeicons-map-pinpoint-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 10c-.43-1.446-1.915-2.5-3.5-2.5A3.5 3.5 0 0 0 7.5 11c0 1.763 1.304 3.257 3 3.5"></svg:path><svg:path d="M19.95 10c-.48-4.466-4.39-8-8.95-8c-4.87 0-9 4.033-9 8.926c0 4.988 4.204 8.436 8.073 10.83a1.89 1.89 0 0 0 1.854 0q.382-.233.767-.481"></svg:path><svg:path d="M17.5 12c2.435 0 4.5 2.017 4.5 4.463c0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.927 0C15.102 20.681 13 18.957 13 16.463C13 14.016 15.065 12 17.5 12m0 4.5h.009"></svg:path></svg:g>`,
})
export class HugeiconsMapPinpoint01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
