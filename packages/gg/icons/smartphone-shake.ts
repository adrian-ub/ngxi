import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmartphoneShakeIcon],svg[gg-smartphone-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 14h-2v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M8 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2 0h4v10h-4z" clip-rule="evenodd"></svg:path><svg:path d="M18 9h2v6h-2zM0 14h2v-4H0zm6 1H4V9h2zm18-5h-2v4h2z"></svg:path></svg:g>`,
})
export class GgSmartphoneShakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
