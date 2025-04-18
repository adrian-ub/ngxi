import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRainbowIcon],svg[tabler-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17"></svg:path><svg:path d="M18 17a6 6 0 1 0-12 0"></svg:path><svg:path d="M14 17a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerRainbowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
