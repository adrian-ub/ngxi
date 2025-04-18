import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBadgeAccountAlertOutlineIcon],svg[mdi-badge-account-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h-3v2h3v16H5V5h3V3H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H6v-1c0-1.33 2.67-2 4-2s4 .67 4 2zm0 3H6v-1h8zm-4 2H6v-1h4zm1-15H9V1h2zm8 8V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiBadgeAccountAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
