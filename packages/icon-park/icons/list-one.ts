import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListOneIcon],svg[icon-park-list-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 6H34V12H18V6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 21H38V27H18V21Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 36H44V42H18V36Z"></svg:path><svg:circle cx="8" cy="9" r="2"></svg:circle><svg:circle cx="8" cy="24" r="2"></svg:circle><svg:circle cx="8" cy="39" r="2"></svg:circle></svg:g>`,
})
export class IconParkListOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
