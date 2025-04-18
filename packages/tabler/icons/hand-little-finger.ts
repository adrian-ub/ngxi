import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHandLittleFingerIcon],svg[tabler-hand-little-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13v-2.5a1.5 1.5 0 0 1 3 0V12m0-.5v-1a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 12V6.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path><svg:path d="M14 10.5a1.5 1.5 0 0 1 3 0V12"></svg:path></svg:g>`,
})
export class TablerHandLittleFingerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
