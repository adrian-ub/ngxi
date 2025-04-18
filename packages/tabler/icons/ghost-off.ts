import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGhostOffIcon],svg[tabler-ghost-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.794 4.776A7 7 0 0 1 19 11v4m-.12 3.898a1.78 1.78 0 0 1-2.98.502a1.65 1.65 0 0 0-2.6 0a1.65 1.65 0 0 1-2.6 0a1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 18v-7c0-1.683.594-3.227 1.583-4.434M14 10h.01"></svg:path><svg:path d="M10 14a3.5 3.5 0 0 0 4 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerGhostOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
