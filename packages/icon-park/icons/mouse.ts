import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMouseIcon],svg[icon-park-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z" clip-rule="evenodd"></svg:path><svg:path d="M36 16C36 9.37258 30.6274 4 24 4V16H36Z"></svg:path><svg:path d="M24 4C17.3726 4 12 9.37258 12 16H24V4Z"></svg:path></svg:g>`,
})
export class IconParkMouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
