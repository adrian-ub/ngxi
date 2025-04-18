import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotebook02Icon],svg[hugeicons-notebook-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-2C8.229 2 6.343 2 5.172 3.172S4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22h2c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14M5 6H2m3 6H2m3 6H2M17.5 7h-4m2 4h-2M9 22V2" color="currentColor"></svg:path>`,
})
export class HugeiconsNotebook02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
