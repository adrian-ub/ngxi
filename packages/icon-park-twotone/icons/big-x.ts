import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBigXIcon],svg[icon-park-twotone-big-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBigX0"><svg:g fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 6h11L15 42H4z"></svg:path><svg:path d="M15 6H4l29 36h11z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBigX0)"></svg:path>`,
})
export class IconParkTwotoneBigXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
