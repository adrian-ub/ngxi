import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRulesIcon],svg[flat-color-icons-rules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42A5F5" d="M39 45H9s-3-.1-3-8h36c0 7.9-3 8-3 8"></svg:path><svg:path fill="#90CAF9" d="M8 3h32v34H8z"></svg:path><svg:path fill="#1976D2" d="M18 15h16v2H18zm0 4h16v2H18zm0 4h16v2H18zm0 4h16v2H18zm0 4h16v2H18zm-4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"></svg:path>`,
})
export class FlatColorIconsRulesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
