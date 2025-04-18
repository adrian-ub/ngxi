import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStethoscopeIcon],svg[icon-park-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.9474 4V10M10.0526 7H4C4 7 4 16 4 21C4 26 8 32 16 32C24 32 28 26 28 21C28 16 28 7 28 7H21.9474H10.0526ZM10.0526 4V10V4Z"></svg:path><svg:path fill="#2F88FF" d="M40 23C42.2091 23 44 21.2091 44 19C44 16.7909 42.2091 15 40 15C37.7909 15 36 16.7909 36 19C36 21.2091 37.7909 23 40 23Z"></svg:path><svg:path d="M16 32C16 38.6274 21.3726 44 28 44C34.6274 44 40 38.6274 40 32V23"></svg:path></svg:g>`,
})
export class IconParkStethoscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
