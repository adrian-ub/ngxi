import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLockOneIcon],svg[icon-park-solid-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLockOne0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="30" r="14" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linejoin="round" d="M31 18v-7a7 7 0 1 0-14 0v7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 26v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLockOne0)"></svg:path>`,
})
export class IconParkSolidLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
