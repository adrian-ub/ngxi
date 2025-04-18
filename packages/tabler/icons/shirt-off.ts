import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShirtOffIcon],svg[tabler-shirt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.243 4.252L9 4c0 .43.09.837.252 1.206m1.395 1.472A3 3 0 0 0 15 4l6 2v5h-3v3m0 4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l2.26-.753M3 3l18 18"></svg:path>`,
})
export class TablerShirtOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
