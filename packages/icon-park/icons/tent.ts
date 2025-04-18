import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTentIcon],svg[icon-park-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M10 12L4 36H16"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M38 12H10L16 36H44L38 12Z"></svg:path><svg:path stroke="#fff" d="M12 18H39"></svg:path><svg:path stroke="#000" d="M10 12L13 24"></svg:path><svg:path stroke="#000" d="M38 12L41 24"></svg:path></svg:g>`,
})
export class IconParkTentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
