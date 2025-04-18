import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneReverseLensOneIcon],svg[icon-park-twotone-reverse-lens-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTReverseLensOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linejoin="round" d="m15 12l3-6h12l3 6z"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M41 12H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 19v8m-16 0v8"></svg:path><svg:path stroke-linecap="round" d="M16 27a8 8 0 0 0 11 7.419M32 27a8 8 0 0 0-11-7.419"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTReverseLensOne0)"></svg:path>`,
})
export class IconParkTwotoneReverseLensOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
