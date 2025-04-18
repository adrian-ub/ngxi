import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneOvalOneIcon],svg[icon-park-twotone-oval-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTOvalOne0"><svg:ellipse cx="24" cy="24" fill="#555" stroke="#fff" stroke-width="4" rx="14" ry="20"></svg:ellipse></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTOvalOne0)"></svg:path>`,
})
export class IconParkTwotoneOvalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
