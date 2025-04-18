import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeCookerIcon],svg[gg-smart-home-cooker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M15 1H9v2h2v2H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-4V3h2zm2 6H7a2 2 0 0 0-2 2h14a2 2 0 0 0-2-2m2 4H5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"></svg:path></svg:g>`,
})
export class GgSmartHomeCookerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
