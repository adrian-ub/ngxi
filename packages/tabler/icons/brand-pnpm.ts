import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandPnpmIcon],svg[tabler-brand-pnpm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zm0-7h4v4h-4zm0-7h4v4h-4zm-7 7h4v4h-4zm0-7h4v4h-4zM3 3h4v4H3z"></svg:path>`,
})
export class TablerBrandPnpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
