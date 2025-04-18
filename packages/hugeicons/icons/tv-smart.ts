import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTvSmartIcon],svg[hugeicons-tv-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828S6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3"></svg:path><svg:path d="M16.9 15.5a1.6 1.6 0 0 1 1.6-1.6m-4.8 1.6a4.8 4.8 0 0 1 4.8-4.8m-8 4.8a8 8 0 0 1 8-8M18 19l1 2M6 19l-1 2"></svg:path></svg:g>`,
})
export class HugeiconsTvSmartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
