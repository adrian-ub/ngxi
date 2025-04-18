import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailAccount01Icon],svg[hugeicons-mail-account-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 5l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"></svg:path><svg:path d="M21.996 10.502a79 79 0 0 0-.012-.976c-.065-3.066-.098-4.6-1.229-5.735s-2.705-1.175-5.854-1.254c-1.94-.05-3.862-.05-5.802 0c-3.149.079-4.723.118-5.854 1.254S2.08 6.46 2.015 9.526a69 69 0 0 0 0 2.953c.066 3.066.099 4.6 1.23 5.735S5.95 19.39 9.099 19.47c.608.015 1.397.025 1.901.031m4.586-.853c-.629.369-2.277 1.121-1.273 2.063c.49.46 1.037.789 1.723.789h3.92c.686 0 1.233-.329 1.723-.789c1.004-.942-.644-1.694-1.273-2.063a4.8 4.8 0 0 0-4.82 0"></svg:path><svg:path d="M19.996 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsMailAccount01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
