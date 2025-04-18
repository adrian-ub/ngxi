import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTeaPodIcon],svg[hugeicons-tea-pod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.007 10.005V6.504c0-2.486-2.023-4.502-4.519-4.502S9.97 4.018 9.97 6.504v3.501m4.518-1v-1.5"></svg:path><svg:path d="m2.17 11.128l4.483 5.775a.3.3 0 0 1 .062.172l.09 2.384A1.87 1.87 0 0 0 8.22 21.2l.247.062a24.4 24.4 0 0 0 12.124-.06a1.796 1.796 0 0 0 1.343-1.697l.06-2.791c.086-3.933-1.187-4.78-1.81-5.35c-1.442-1.323-3.587-1.64-5.647-1.64c-3.572 0-5.292 1.015-6.09 1.706a.54.54 0 0 1-.629.07L3.844 9.158a.805.805 0 0 0-1.038.192l-.63.792a.8.8 0 0 0-.006.986"></svg:path></svg:g>`,
})
export class HugeiconsTeaPodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
