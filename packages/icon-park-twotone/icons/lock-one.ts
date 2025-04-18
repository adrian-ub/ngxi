import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLockOneIcon],svg[icon-park-twotone-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLockOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="30" r="14" fill="#555"></svg:circle><svg:path stroke-linejoin="round" d="M31 18v-7a7 7 0 1 0-14 0v7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 26v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLockOne0)"></svg:path>`,
})
export class IconParkTwotoneLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
