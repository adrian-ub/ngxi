import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBedsideTwoIcon],svg[icon-park-solid-bedside-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBedsideTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 18h40v24H4z"></svg:path><svg:path stroke="#000" d="M22 24h4M4 30h40m-22 6h4"></svg:path><svg:path stroke="#fff" d="M8 42v4m32-4v4M24 18v-8"></svg:path><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M32 10a8 8 0 1 0-16 0z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M44 26v8M4 26v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBedsideTwo0)"></svg:path>`,
})
export class IconParkSolidBedsideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
