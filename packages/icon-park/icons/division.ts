import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDivisionIcon],svg[icon-park-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="37" r="5" fill="#2F88FF"></svg:circle><svg:path d="M44 24L4 24"></svg:path></svg:g>`,
})
export class IconParkDivisionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
