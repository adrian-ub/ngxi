import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCookingIcon],svg[icon-park-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M6 42L42 42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 36L42 36"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 25C9 16.7157 15.7157 10 24 10C32.2843 10 39 16.7157 39 25V36H9L9 25Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 25V29"></svg:path><svg:path stroke="#000" d="M28 10V8C28 5.79086 26.2091 4 24 4V4C21.7909 4 20 5.79086 20 8V10"></svg:path></svg:g>`,
})
export class IconParkCookingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
