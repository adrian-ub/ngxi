import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMetroIcon],svg[twemoji-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"></svg:path><svg:path fill="#808285" d="M8.896 33.509c.7.412 1.421.79 2.178 1.106L17.65 20h-1.419zM19.77 20h-1.42l6.577 14.615a18 18 0 0 0 2.178-1.106z"></svg:path><svg:path fill="#58595B" d="M12 26h2v2h-2zm10 0h2v2h-2z"></svg:path><svg:path fill="#A7A9AC" d="M26 25a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#D1D3D4" d="M24.363 6H11.636A3.636 3.636 0 0 0 8 9.636V23a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.636A3.636 3.636 0 0 0 24.363 6"></svg:path><svg:path fill="#DD2E44" d="M8 19v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8H8z"></svg:path><svg:path fill="#58595B" d="M26 17a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#55ACEE" d="M24 16a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#FFD983" d="M10 21h4v2h-4zm12 0h4v2h-4z"></svg:path><svg:path fill="#808285" d="M20 9a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiMetroIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
