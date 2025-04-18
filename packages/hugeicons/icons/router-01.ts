import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRouter01Icon],svg[hugeicons-router-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17s0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21M8 3.478C9.149 2.543 10.52 2 11.995 2c1.478 0 2.854.547 4.005 1.487M14.174 6a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 9h.006M18 17h.009M14 17h.009M6 17h4" color="currentColor"></svg:path>`,
})
export class HugeiconsRouter01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
