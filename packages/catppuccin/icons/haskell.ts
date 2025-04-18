import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHaskellIcon],svg[catppuccin-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5h3m-1.5 3h1.5m-10 6l2.5-5l-2.5-5H8l5.6 10h-2.53l-1.52-2.92L8 13.5zm-5 0l2.5-5l-2.5-5H3l2.5 5l-2.5 5z"></svg:path>`,
})
export class CatppuccinHaskellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
