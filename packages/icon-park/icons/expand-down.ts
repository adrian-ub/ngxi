import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandDownIcon],svg[icon-park-expand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 10C6 7.79086 7.79086 6 10 6H38C40.2091 6 42 7.79086 42 10V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 32H42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 16L24 20L28 16"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 26V38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 26V38"></svg:path></svg:g>`,
})
export class IconParkExpandDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
