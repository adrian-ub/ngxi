import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneXiaoduHomeIcon],svg[icon-park-twotone-xiaodu-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTXiaoduHome0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 20L24 6l20 14v22H4z"></svg:path><svg:path d="M12.687 26.686a16 16 0 0 1 22.627 0m-16.971 5.657a8 8 0 0 1 11.314 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTXiaoduHome0)"></svg:path>`,
})
export class IconParkTwotoneXiaoduHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
