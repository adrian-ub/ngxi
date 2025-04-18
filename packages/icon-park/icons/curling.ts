import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCurlingIcon],svg[icon-park-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M38 42H10C6.69 42 4 39.32 4 36V28C4 24.69 6.68 22 10 22H38C41.31 22 44 24.68 44 28V36C44 39.32 41.32 42 38 42Z"></svg:path><svg:path stroke-linecap="round" d="M4 32H44"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M10 22L16.48 7.2C16.79 6.47 17.51 6 18.31 6H35.5C37.43 6 39 7.57 39 9.5C39 11.43 37.43 13 35.5 13H22V22H10Z"></svg:path></svg:g>`,
})
export class IconParkCurlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
