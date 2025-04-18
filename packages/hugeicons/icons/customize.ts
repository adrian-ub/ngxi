import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCustomizeIcon],svg[hugeicons-customize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M17.5 14h-11a3.5 3.5 0 1 0 0 7h11a3.5 3.5 0 1 0 0-7M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0"></svg:path><svg:path d="M6.5 3h11a3.5 3.5 0 1 1 0 7h-11a3.5 3.5 0 1 1 0-7"></svg:path></svg:g>`,
})
export class HugeiconsCustomizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
