import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWindmillIcon],svg[icon-park-twotone-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWindmill0"><svg:path fill="#555" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 23.992l-.03-9.996L23.943 4L12 14v10zm.008.008l9.996-.03L44 23.943L34 12H24zm-.008.008l.03 9.996l.028 9.996L36 34V24zM23.992 24l-9.996.03L4 24.057L14 36h10z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWindmill0)"></svg:path>`,
})
export class IconParkTwotoneWindmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
