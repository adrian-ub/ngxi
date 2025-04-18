import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUnlockIcon],svg[icon-park-solid-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUnlock0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="22" x="7" y="22.048" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M14 22v-7.995c-.005-5.135 3.923-9.438 9.086-9.954S32.967 6.974 34 12.006"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 30v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUnlock0)"></svg:path>`,
})
export class IconParkSolidUnlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
