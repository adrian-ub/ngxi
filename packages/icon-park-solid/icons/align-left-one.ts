import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAlignLeftOneIcon],svg[icon-park-solid-align-left-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M16 6h16v6H16z"></svg:path><svg:path d="M6 42V6"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M16 21h20v6H16zm0 15h26v6H16z"></svg:path></svg:g>`,
})
export class IconParkSolidAlignLeftOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
