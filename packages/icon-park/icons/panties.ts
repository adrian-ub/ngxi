import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPantiesIcon],svg[icon-park-panties-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M44 15C40.9999 12 39 6 39 6C39 6 34 9.5 24 9.5C14 9.5 9 6 9 6C9 6 8 11 4 15C4.00015 27 21 42 21 42H27C27 42 44 27 44 15Z"></svg:path><svg:path d="M44 15C44 15 35.0004 16 31.0002 23C26.9999 30 27 42 27 42"></svg:path><svg:path d="M4 15C4 15 12.9996 16 16.9998 23C21.0001 30 21 42 21 42"></svg:path></svg:g>`,
})
export class IconParkPantiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
