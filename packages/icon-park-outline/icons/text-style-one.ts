import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextStyleOneIcon],svg[icon-park-outline-text-style-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 42l4.941-12M32 42l-4.941-12m0 0L25 25L18 8l-7 17l-2.059 5m18.118 0H8.94M28 10h16M32 20h12m-8 10h8m-4 10h4"></svg:path>`,
})
export class IconParkOutlineTextStyleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
