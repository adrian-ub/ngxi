import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMeIcon],svg[icon-park-twotone-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMe0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"></svg:path><svg:path fill="#555" d="M24 23a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" d="M10.022 38.332C10.366 33.121 14.702 29 20 29h8c5.291 0 9.623 4.11 9.977 9.311"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMe0)"></svg:path>`,
})
export class IconParkTwotoneMeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
