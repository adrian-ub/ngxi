import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPianoIcon],svg[icon-park-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="16" x="4" y="8" fill="#2F88FF"></svg:rect><svg:rect width="40" height="16" x="4" y="24"></svg:rect><svg:path d="M10 24V32"></svg:path><svg:path d="M16 24V32"></svg:path><svg:path d="M26 24V32"></svg:path><svg:path d="M32 24V32"></svg:path><svg:path d="M38 24V32"></svg:path></svg:g>`,
})
export class IconParkPianoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
