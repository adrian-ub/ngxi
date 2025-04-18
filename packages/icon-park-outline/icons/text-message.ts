import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextMessageIcon],svg[icon-park-outline-text-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M44 7H4v30h15l5 5l5-5h15z"></svg:path><svg:path d="M14 16h6m-6 8h2m13-10l7 14m-7-14l-7 14m2-4h10"></svg:path></svg:g>`,
})
export class IconParkOutlineTextMessageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
