import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBedsideTwoIcon],svg[icon-park-outline-bedside-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 18h40v24H4zm18 6h4M4 30h40m-22 6h4M8 42v4m32-4v4M24 18v-8"></svg:path><svg:path d="M32 10a8 8 0 1 0-16 0z" clip-rule="evenodd"></svg:path><svg:path d="M44 26v8M4 26v8"></svg:path></svg:g>`,
})
export class IconParkOutlineBedsideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
