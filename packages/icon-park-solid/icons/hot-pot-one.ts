import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHotPotOneIcon],svg[icon-park-solid-hot-pot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHotPotOne0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M24 36c12 0 17-8.059 17-18H7c0 9.941 5 18 17 18"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m17 35l-3 9h20l-3-9m-2-17L27.889 4H20.11L19 18"></svg:path><svg:path stroke="#000" d="M15 25s.07 1.07 1 2s2 1 2 1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHotPotOne0)"></svg:path>`,
})
export class IconParkSolidHotPotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
