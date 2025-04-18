import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRotateIcon],svg[icon-park-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 24H42V42H12V24Z"></svg:path><svg:path stroke-linecap="round" d="M6 8V17H15"></svg:path><svg:path stroke-linecap="round" d="M38.4747 13.2985C35.1956 8.87049 29.933 6 24 6C18.1788 6 13.0029 8.76334 9.71272 13.0498L6 17"></svg:path></svg:g>`,
})
export class IconParkRotateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
