import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEightKeyIcon],svg[icon-park-twotone-eight-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEightKey0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#555" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M24 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 11a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEightKey0)"></svg:path>`,
})
export class IconParkTwotoneEightKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
