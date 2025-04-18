import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLegalDocument02Icon],svg[hugeicons-legal-document-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14m5 4h8"></svg:path><svg:path d="M7.05 6.977h9.907m-4.942 0v7.006m0 0h-.533m.533 0h.526M8.016 7.965c-.726.746-1.928 2.032-1.402 3.103c.467.951 1.131.968 1.401.968s.973-.017 1.44-.968c.526-1.071-.714-2.357-1.44-3.103m7.966 0c-.725.746-1.927 2.032-1.402 3.103c.467.951 1.132.968 1.402.968s.973-.017 1.44-.968c.526-1.071-.714-2.357-1.44-3.103"></svg:path></svg:g>`,
})
export class HugeiconsLegalDocument02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
