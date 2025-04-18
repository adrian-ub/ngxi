import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStamp01Icon],svg[hugeicons-stamp-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.985 19.181c.016 1.24.097 1.762.513 2.234C6.015 22 6.846 22 8.51 22h6.952c1.663 0 2.495 0 3.012-.586c.415-.472.497-.994.512-2.234m-6.998-.11H4.757c-.718 0-1.34-.585-1.25-1.297c.16-1.256.798-2.774 3.329-3.707c.89-.328 1.869-.612 2.351-1.428c.678-1.146.976-2.4-.287-4.55C6.836 4.02 9.924 2 12.01 2s5.137 2.15 3.053 6.09c-1.266 2.132-.93 3.403-.252 4.549c.483.816 1.462 1.1 2.352 1.428c2.53.933 3.168 2.451 3.327 3.707c.09.712-.53 1.298-1.248 1.298H12.01" color="currentColor"></svg:path>`,
})
export class HugeiconsStamp01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
