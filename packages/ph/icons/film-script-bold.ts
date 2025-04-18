import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptBoldIcon],svg[ph-film-script-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM76 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m0 96a16 16 0 1 1 16 16a16 16 0 0 1-16-16m0-48a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhFilmScriptBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
