import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextWrapColumnIcon],svg[tabler-text-wrap-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9h7a3 3 0 0 1 0 6h-4l2-2m0 4l-2-2M3 3v18M21 3v18"></svg:path>`,
})
export class TablerTextWrapColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
