import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBringToFrontOneIcon],svg[icon-park-solid-bring-to-front-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 21v13h13m-6-20h13v13"></svg:path><svg:path fill="currentColor" d="M5 21V5h16v16zm22 22V27h16v16z"></svg:path></svg:g>`,
})
export class IconParkSolidBringToFrontOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
