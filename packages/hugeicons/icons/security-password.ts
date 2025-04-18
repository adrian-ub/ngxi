import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityPasswordIcon],svg[hugeicons-security-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 9q.045-1.208.27-2.45c.11-.616.166-.924.356-1.135s.66-.36 1.599-.66C7.035 4.019 8.987 2 11.998 2s4.967 2.02 7.277 2.755c.939.3 1.408.449 1.598.66c.19.21.246.519.357 1.135q.225 1.242.27 2.45m-2.055 8c-1.32 2.023-3.268 3.637-5.83 4.618c-.667.255-1 .382-1.614.382c-.612 0-.946-.128-1.613-.383c-2.562-.98-4.51-2.594-5.831-4.617M8.5 12l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m-5-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m10-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m5-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsSecurityPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
