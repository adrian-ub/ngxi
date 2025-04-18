import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarCircleIcon],svg[hugeicons-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M14.71 10.061c-.099-.763-.975-1.995-2.55-1.995c-1.829 0-2.599 1.013-2.755 1.52c-.244.678-.195 2.071 1.95 2.223c2.68.19 3.754.506 3.618 2.147s-1.631 1.995-2.812 1.957s-3.113-.58-3.188-2.04m3-6.875V8.07m0 7.833v1.095"></svg:path></svg:g>`,
})
export class HugeiconsDollarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
