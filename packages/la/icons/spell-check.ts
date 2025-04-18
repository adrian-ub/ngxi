import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSpellCheckIcon],svg[la-spell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.332 5L3 18h2.107l1-3h4.561l1 3h2.107L9.441 5zM15 5v13h6c2.206 0 4-1.794 4-4a4 4 0 0 0-2.51-3.705c.318-.527.51-1.136.51-1.795C23 6.57 21.43 5 19.5 5zm2 2h2.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H17zM8.389 8.162L10.002 13H6.775L8.39 8.162zM17 12h4c1.103 0 2 .897 2 2s-.897 2-2 2h-4zm10.809 5.777l-8.692 8.336l-3.924-3.777l-1.386 1.44l5.306 5.11l10.078-9.663z"></svg:path>`,
})
export class LaSpellCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
