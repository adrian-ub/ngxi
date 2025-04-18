import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFeelgoodOneIcon],svg[icon-park-outline-feelgood-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 6H4v30h21l10 5v-5h9z"></svg:path><svg:path d="M13 23s4 4 11 4s11-4 11-4"></svg:path></svg:g>`,
})
export class IconParkOutlineFeelgoodOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
