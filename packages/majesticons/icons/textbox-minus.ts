import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTextboxMinusIcon],svg[majesticons-textbox-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 18h-6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.803A6 6 0 0 1 12 18q0-.514.084-1.003L12 17H8a1 1 0 1 1 0-2h4c.255 0 .488.095.665.253A6 6 0 0 1 14.681 13H8a1 1 0 1 1 0-2h8a1 1 0 0 1 .997 1.084A6 6 0 0 1 18 12c1.093 0 2.117.292 3 .803V6a3 3 0 0 0-3-3zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsTextboxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
