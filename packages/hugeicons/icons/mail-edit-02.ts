import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailEdit02Icon],svg[hugeicons-mail-edit-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7.002 7.75l2.942 1.74c1.715 1.014 2.401 1.014 4.116 0l2.942-1.74"></svg:path><svg:path d="M21.998 10.75v-.972c-.066-3.067-.099-4.6-1.23-5.737c-1.132-1.136-2.707-1.175-5.857-1.254a115 115 0 0 0-5.806 0c-3.15.079-4.725.118-5.857 1.254s-1.165 2.67-1.23 5.737a69 69 0 0 0 0 2.953c.066 3.068.098 4.601 1.23 5.737s2.707 1.176 5.857 1.255c.468.012 1.43.02 1.897.027m9.853-6.06l.692.692a1.5 1.5 0 0 1 0 2.121l-3.628 3.696a2 2 0 0 1-1.047.551l-2.248.488a.5.5 0 0 1-.595-.593l.479-2.235a2 2 0 0 1 .552-1.047l3.673-3.674a1.5 1.5 0 0 1 2.122 0"></svg:path></svg:g>`,
})
export class HugeiconsMailEdit02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
