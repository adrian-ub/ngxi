import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBaggageDelayIcon],svg[icon-park-outline-baggage-delay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 26V14a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h17M16 12v28m12-28v17m0-17V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6"></svg:path><svg:path d="M35 44a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 32v4h4"></svg:path><svg:path stroke-linecap="round" d="M13 40v4"></svg:path></svg:g>`,
})
export class IconParkOutlineBaggageDelayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
