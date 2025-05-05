import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnarchive03Icon],svg[hugeicons-unarchive-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 7H3v6c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13zm0 0H3l1.2-1.6c.883-1.178 1.325-1.767 1.958-2.083C6.792 3 7.528 3 9 3h6c1.472 0 2.208 0 2.842.317c.633.316 1.075.905 1.958 2.083z"></svg:path><svg:path d="M12 11v6.5m-3-4c.59-.607 2.16-3 3-3s2.41 2.393 3 3"></svg:path></svg:g>`,
})
export class HugeiconsUnarchive03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
