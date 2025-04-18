import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMtgfamIcon],svg[arcticons-mtgfam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.454L4.5 19.622l7.448 22.924h24.104L43.5 19.622zm19.5 14.168L24 26.621m0-21.167v21.167M4.5 19.622L24 26.621M11.948 42.546L24 26.621m12.052 15.925L24 26.621"></svg:path>`,
})
export class ArcticonsMtgfamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
