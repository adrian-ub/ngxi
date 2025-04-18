import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHandFingerLeftIcon],svg[tabler-hand-finger-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8H3.5a1.5 1.5 0 0 0 0 3H11m-.5 0h-2a1.5 1.5 0 1 0 0 3H11m-1.5 0a1.5 1.5 0 0 0 0 3H11"></svg:path><svg:path d="M10.5 17a1.5 1.5 0 0 0 0 3H15a6 6 0 0 0 6-6v-2v.208a6 6 0 0 0-2.7-5.012L18 7q-.718-.468-5.728-3.286a1.5 1.5 0 0 0-2.022.536a1.87 1.87 0 0 0 .28 2.28L12 8"></svg:path></svg:g>`,
})
export class TablerHandFingerLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
