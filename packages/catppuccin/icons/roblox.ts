import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRobloxIcon],svg[catppuccin-roblox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M11.752 14.5L1.5 11.734L4.249 1.5L14.5 4.266ZM9.814 6.965l-2.862-.787l-.766 2.857l2.862.787Z"></svg:path>`,
})
export class CatppuccinRobloxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
