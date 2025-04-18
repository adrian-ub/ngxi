import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignModeLightFilledIcon],svg[tdesign-mode-light-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.226-.003h2.003V2h-2.003zM4.449 2.803L5.866 4.22L4.45 5.637L3.032 4.22zm15.557 0l1.417 1.417l-1.417 1.417l-1.418-1.417zm-15.78 9.198a8 8 0 1 1 16 0a8 8 0 0 1-16 0m-4-1.004h2.003V13H.226zm22 0h2.004V13h-2.004zM4.449 18.36l1.417 1.416l-1.417 1.418l-1.416-1.418zm15.557 0l1.416 1.416l-1.416 1.418l-1.418-1.418zm-8.78 3.637h2.003V24h-2.003z"></svg:path>`,
})
export class TdesignModeLightFilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
