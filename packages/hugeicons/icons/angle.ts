import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAngleIcon],svg[hugeicons-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V2m0 0l10 15M12 2L2 17m14-9c-1.145 1.263-2.52 2-4 2s-2.855-.737-4-2m4 6c-2.22 0-4.283-.737-6-2" color="currentColor"></svg:path>`,
})
export class HugeiconsAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
