import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTvOneIcon],svg[icon-park-solid-tv-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTvOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 12H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="#000" stroke="#000" d="M31 19H11v16h20z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m14 4.5l9.09 7.5L34 2"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 18v1m0 6v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTvOne0)"></svg:path>`,
})
export class IconParkSolidTvOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
