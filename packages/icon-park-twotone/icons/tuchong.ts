import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTuchongIcon],svg[icon-park-twotone-tuchong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTuchong0"><svg:g fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 39h38V28h-6v5H11V15h12V9H5z"></svg:path><svg:path stroke-linecap="round" d="M43 16v6c-8 0-14-5-14-13h6c0 4 2 7 8 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTuchong0)"></svg:path>`,
})
export class IconParkTwotoneTuchongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
