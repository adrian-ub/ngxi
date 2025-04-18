import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTypefaceIcon],svg[tabler-typeface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M17 17a2 2 0 0 1-2-2V7h-5a2 2 0 0 0-2 2"></svg:path><svg:path d="M7 17a2.775 2.775 0 0 0 2.632-1.897L10 14a13.4 13.4 0 0 1 3.236-5.236L15 7m-5 7h5"></svg:path></svg:g>`,
})
export class TablerTypefaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
