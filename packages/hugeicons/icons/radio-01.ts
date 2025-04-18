import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadio01Icon],svg[hugeicons-radio-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 5c3.771 0 5.657 0 6.828 1.245S22 9.493 22 13.5s0 6.01-1.172 7.255S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.245S2 17.507 2 13.5s0-6.01 1.172-7.255S6.229 5 10 5z"></svg:path><svg:path d="M17.397 11.25a4.5 4.5 0 0 1-7.793 4.5m7.793-4.5a4.5 4.5 0 0 0-7.793 4.5m7.793-4.5l-7.793 4.5M17 2L7 5M6 9h.009"></svg:path></svg:g>`,
})
export class HugeiconsRadio01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
