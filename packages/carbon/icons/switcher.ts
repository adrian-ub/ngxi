import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSwitcherIcon],svg[carbon-switcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h4v4h-4zM4 4h4v4H4zm20 0h4v4h-4zM14 14h4v4h-4zM4 14h4v4H4zm20 0h4v4h-4zM14 24h4v4h-4zM4 24h4v4H4zm20 0h4v4h-4z"></svg:path>`,
})
export class CarbonSwitcherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
