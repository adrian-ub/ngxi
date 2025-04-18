import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFireIcon],svg[hugeicons-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.856 22c12.222-3 5.378-15-2.933-20c-.978 3.5-2.445 4.5-5.378 8c-3.884 4.634-1.955 10 3.422 12c-.815-1-2.917-3.1-1.467-6c.5-1 1.5-2 1-4c.978.5 3 1 3.5 3.5c.815-1 1.66-3.1.878-5.5c6.122 4.5 3.622 9 .978 12" color="currentColor"></svg:path>`,
})
export class HugeiconsFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
