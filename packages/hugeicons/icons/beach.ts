import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBeachIcon],svg[hugeicons-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 15.75S3.795 15 7 15c5 0 9 3 15 3M2 21h20M12.594 3.228c-2.846.816-4.695 3.624-4.59 6.647c.022.628.033.942.301 1.08c.269.14.547-.057 1.104-.45l1.242-.878a.98.98 0 0 1 .63-.181l2.917.187l2.438-1.723a.98.98 0 0 1 .63-.18l1.522.097c.653.042.98.063 1.141-.188s.03-.523-.233-1.067c-1.31-2.702-4.24-4.165-7.102-3.344M14.5 9.5l2 7.5M12.286 3L12 2" color="currentColor"></svg:path>`,
})
export class HugeiconsBeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
