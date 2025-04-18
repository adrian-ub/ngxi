import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEnvelopeOneIcon],svg[icon-park-outline-envelope-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M36 16V8H4v24h8"></svg:path><svg:path d="M12 40h32V16H12z"></svg:path><svg:path stroke-linecap="round" d="m12 16l16 12l16-12"></svg:path><svg:path stroke-linecap="round" d="M32 16H12v15"></svg:path><svg:path stroke-linecap="round" d="M44 31V16H24"></svg:path></svg:g>`,
})
export class IconParkOutlineEnvelopeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
