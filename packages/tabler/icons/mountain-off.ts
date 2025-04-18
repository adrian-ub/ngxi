import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMountainOffIcon],svg[tabler-mountain-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.281 14.26L14.08 5.388a2.3 2.3 0 0 0-4.158 0l-.165.349M8.468 8.456L3 20h17"></svg:path><svg:path d="m7.5 11l2 2.5l2-2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerMountainOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
