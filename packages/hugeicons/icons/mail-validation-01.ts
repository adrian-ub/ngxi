import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailValidation01Icon],svg[hugeicons-mail-validation-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m6.912 6.838l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0l2.942-1.74m-2 10.5s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path><svg:path d="m22 10.312l-.041-3.874c-.011-1.475-.808-4.426-3.905-4.426H6.105C4.737 1.912 2 2.347 2 7.142v7.11c0 1.22.272 2.863 1.61 3.853c.866.64 2.001.7 3.074.753l2.247.111"></svg:path><svg:path d="M21.98 16.96c0 2.783-2.245 5.04-5.016 5.04s-5.018-2.257-5.018-5.04c0-2.785 2.247-5.042 5.018-5.042s5.017 2.257 5.017 5.041"></svg:path></svg:g>`,
})
export class HugeiconsMailValidation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
