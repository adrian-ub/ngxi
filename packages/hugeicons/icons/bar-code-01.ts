import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBarCode01Icon],svg[hugeicons-bar-code-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4v16M7.5 4v13M12 4v13m4.5-13v13M21 4v16M7.5 20h.009M12 20h.009m4.491 0h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsBarCode01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
