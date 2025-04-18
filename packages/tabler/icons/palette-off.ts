import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPaletteOffIcon],svg[tabler-palette-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 15h-1a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21A9 9 0 0 1 5.628 5.644M8 4c1.236-.623 2.569-1 4-1c4.97 0 9 3.582 9 8c0 1.06-.474 2.078-1.318 2.828a4.5 4.5 0 0 1-1.127.73"></svg:path><svg:path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4-3a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerPaletteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
