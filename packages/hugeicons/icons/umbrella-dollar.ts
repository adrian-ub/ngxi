import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUmbrellaDollarIcon],svg[hugeicons-umbrella-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 3.5V2m0 1.5c-.94 0-4.472 3.793-5.028 8.704M12 3.5c.94 0 4.472 3.793 5.028 8.704M12 3.5c4.937 0 9.055 3.436 10 8c-1.388 1.2-3.893.97-4.972.704M12 3.5c-4.937 0-9.055 3.436-10 8c1.388 1.2 3.893.97 4.972.704m0 0A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0 5.028-1.296"></svg:path><svg:path d="M12 13.5v7a1.5 1.5 0 0 1-3 0V20m8.5-4.125c-.828 0-1.5.588-1.5 1.313c0 .724.672 1.312 1.5 1.312s1.5.588 1.5 1.313c0 .724-.672 1.312-1.5 1.312m0-5.25c.653 0 1.209.365 1.415.875m-1.415-.875V15m0 6.125c-.653 0-1.209-.365-1.415-.875m1.415.875V22"></svg:path></svg:g>`,
})
export class HugeiconsUmbrellaDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
