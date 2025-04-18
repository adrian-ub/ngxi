import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSeaLevelRiseIcon],svg[openmoji-sea-level-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61B2E4" d="M68 44.774c-8 0-11.113 3-16.113 3s-10-3-16-3s-10 3-16 3s-12.887-3-15.887-3V68h64z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M4.887 44.774c3 0 9 3 15 3s10-3 16-3s11 3 16 3s7-3 15-3"></svg:path><svg:path stroke-miterlimit="10" d="M18.922 39.556V26.493m-5 4.614l4.878-5.181a.105.105 0 0 1 .154 0l4.968 5.444m27.616 8.186V26.493m-5 4.614l4.879-5.181a.105.105 0 0 1 .153 0l4.968 5.444"></svg:path></svg:g>`,
})
export class OpenmojiSeaLevelRiseIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
