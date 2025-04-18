import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmartphoneIcon],svg[gg-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 16h-2v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2 0h10v16H7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmartphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
