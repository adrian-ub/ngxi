import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLockIcon],svg[icon-park-twotone-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLock0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="22" x="6" y="22" fill="#555" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M14 22v-8c0-5.523 4.477-10 10-10s10 4.477 10 10v8m-10 8v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLock0)"></svg:path>`,
})
export class IconParkTwotoneLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
