import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserCicrleIcon],svg[lets-icons-user-cicrle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="10" r="3" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></svg:circle><svg:path fill="currentColor" d="M17.78 18.826a.286.286 0 0 0 .134-.355c-.386-.966-1.128-1.818-2.133-2.438C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.005.62-1.747 1.471-2.133 2.438a.286.286 0 0 0 .133.355a12.01 12.01 0 0 0 11.561 0"></svg:path></svg:g>`,
})
export class LetsIconsUserCicrleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
