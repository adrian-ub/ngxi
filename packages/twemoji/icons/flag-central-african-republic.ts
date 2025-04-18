import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagCentralAfricanRepublicIcon],svg[twemoji-flag-central-african-republic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#003082" d="M32 5H4a4 4 0 0 0-4 4v2.5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#EEE" d="M0 11.5h36V18H0z"></svg:path><svg:path fill="#289728" d="M0 18h36v6.5H0z"></svg:path><svg:path fill="#FFCE00" d="M0 24.5V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2.5z"></svg:path><svg:path fill="#D21034" d="M15 5h6v26h-6z"></svg:path><svg:path fill="#FFCE00" d="m6.878 7.612l-.68-2.094l-.681 2.094H3.316l1.781 1.294L4.417 11l1.781-1.294L7.979 11l-.681-2.094L9.08 7.612z"></svg:path>`,
})
export class TwemojiFlagCentralAfricanRepublicIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
