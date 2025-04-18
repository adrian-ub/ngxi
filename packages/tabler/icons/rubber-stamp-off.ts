import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRubberStampOffIcon],svg[tabler-rubber-stamp-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.273 8.273c.805 2.341 2.857 5.527-1.484 5.527C4.421 13.8 3 13.8 3 17.85h14.85M5 21h14M3 3l18 18M8.712 4.722A3.99 3.99 0 0 1 12 3a4 4 0 0 1 4 4c0 .992-.806 2.464-1.223 3.785m6.198 6.196c-.182-2.883-1.332-3.153-3.172-3.178"></svg:path>`,
})
export class TablerRubberStampOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
