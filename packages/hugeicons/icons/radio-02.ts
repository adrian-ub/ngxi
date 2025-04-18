import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadio02Icon],svg[hugeicons-radio-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 13c0-3.3 0-4.95.879-5.975C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121 1.025S22 9.7 22 13s0 4.95-.879 5.975C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-1.025S2 16.3 2 13m5 2h.009M6 20v2m12-2v2M5 6l14-4M9 11H6"></svg:path><svg:circle cx="15" cy="13" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsRadio02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
