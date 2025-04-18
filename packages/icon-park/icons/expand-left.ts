import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandLeftIcon],svg[icon-park-expand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 6V42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 20L20 24L16 28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 6H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 42H38"></svg:path></svg:g>`,
})
export class IconParkExpandLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
