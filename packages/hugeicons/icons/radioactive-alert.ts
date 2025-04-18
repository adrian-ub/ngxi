import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadioactiveAlertIcon],svg[hugeicons-radioactive-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 3a5 5 0 1 0 6 0"></svg:path><svg:path d="M21 13a5 5 0 1 0 0 6"></svg:path><svg:path d="M3 13a5 5 0 1 1 0 6"></svg:path></svg:g>`,
})
export class HugeiconsRadioactiveAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
