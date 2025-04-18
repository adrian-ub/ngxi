import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiBullseyeIcon],svg[oui-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0-3a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class OuiBullseyeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
