import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLaptopOneIcon],svg[icon-park-twotone-laptop-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLaptopOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 11a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v21H8z"></svg:path><svg:path fill="#555" d="M4 32h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLaptopOne0)"></svg:path>`,
})
export class IconParkTwotoneLaptopOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
