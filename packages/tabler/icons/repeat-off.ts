import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRepeatOffIcon],svg[tabler-repeat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12V9a3 3 0 0 1 2.08-2.856M10 6h10m-3-3l3 3l-3 3m3 3v3a3 3 0 0 1-.133.886m-1.99 1.984A3 3 0 0 1 17 18H4m3 3l-3-3l3-3M3 3l18 18"></svg:path>`,
})
export class TablerRepeatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
