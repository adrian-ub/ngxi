import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBytedanceIcon],svg[icon-park-twotone-bytedance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBytedance0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="m5 7l5 2v28l-5 2zm11 16l5 2v12l-5 2zm11-2l5-2v16l-5-2zM38 9l5 2v26l-5 2z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBytedance0)"></svg:path>`,
})
export class IconParkTwotoneBytedanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
