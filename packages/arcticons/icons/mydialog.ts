import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMydialogIcon],svg[arcticons-mydialog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.07 12.049V43.5M10.639 19.911l6.716-3.93l6.715-3.932l6.714 3.932l6.716 3.93v15.726l-6.716 3.931L24.07 43.5l-6.715-3.932l-6.716-3.931M37.5 19.911L10.639 35.637m0-15.726L37.5 35.637M24.07 12.049L10.5 4.5l.139 15.411"></svg:path>`,
})
export class ArcticonsMydialogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
