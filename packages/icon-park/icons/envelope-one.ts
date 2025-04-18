import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEnvelopeOneIcon],svg[icon-park-envelope-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M36 16V8H20H4V20V32H12"></svg:path><svg:path d="M12 40H44V28V16H28H12V28V40Z"></svg:path><svg:path stroke-linecap="round" d="M12 16L28 28L44 16"></svg:path><svg:path stroke-linecap="round" d="M32 16H12V31"></svg:path><svg:path stroke-linecap="round" d="M44 31V16H24"></svg:path></svg:g>`,
})
export class IconParkEnvelopeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
