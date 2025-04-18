import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePointIcon],svg[icon-park-twotone-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPoint0"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.001 30 5 25s3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V16a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 0 1 7-.002V22.5a3.5 3.5 0 0 1 7 0v8.744c0 1.155-.262 2.3-.913 3.254C41.917 36.212 39.602 39.035 36 41c-5.5 3-11.5 2.75-17 0"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPoint0)"></svg:path>`,
})
export class IconParkTwotonePointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
