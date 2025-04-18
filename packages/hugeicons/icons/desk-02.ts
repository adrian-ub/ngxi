import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDesk02Icon],svg[hugeicons-desk-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 4H2m19 4H3m18 4h-7m7 4h-3c-1.886 0-2.828 0-3.414-.586S14 13.886 14 12V8M3 4v16M21 4v16" color="currentColor"></svg:path>`,
})
export class HugeiconsDesk02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
