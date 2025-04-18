import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCapricornusIcon],svg[icon-park-capricornus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 11C18 7.68629 15.3137 5 12 5C8.68629 5 6 7.68629 6 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 11V29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 11C30 7.68629 27.3137 5 24 5C20.6863 5 18 7.68629 18 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 11V31V35.75C30 35.75 30 43 22 43"></svg:path><svg:circle cx="36" cy="30" r="6" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkCapricornusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
