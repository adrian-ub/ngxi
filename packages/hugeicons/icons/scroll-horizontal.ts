import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScrollHorizontalIcon],svg[hugeicons-scroll-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-12 .067c-.04-1.38 5.345-4.628 5.852-3.983c.575.73-.8 2.902-1.11 3.594c-.186.416-.181.596.03 1.012c.96 1.881 1.436 2.818 1.14 3.224c-.471.646-5.872-2.5-5.912-3.847m19.999 0c.04-1.38-5.344-4.628-5.852-3.983c-.575.73.8 2.902 1.11 3.594c.186.416.181.596-.03 1.012c-.96 1.881-1.436 2.818-1.14 3.224c.471.646 5.872-2.5 5.912-3.847" color="currentColor"></svg:path>`,
})
export class HugeiconsScrollHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
