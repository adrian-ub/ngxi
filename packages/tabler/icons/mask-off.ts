import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMaskOffIcon],svg[tabler-mask-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.42 19.41A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.055.588-1.417M8 4h10a2 2 0 0 1 2 2v10"></svg:path><svg:path d="M9.885 9.872a3 3 0 1 0 4.245 4.24m.582-3.396a3 3 0 0 0-1.438-1.433M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerMaskOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
