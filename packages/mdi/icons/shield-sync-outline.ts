import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldSyncOutlineIcon],svg[mdi-shield-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c-3.75-1-7-5.46-7-9.78V6.3l7-3.12l7 3.12v5.77a6.5 6.5 0 0 1 1.91.6A12 12 0 0 0 21 11V5l-9-4l-9 4v6c0 5.55 3.84 10.74 9 12c.35-.09.7-.2 1-.32A6.3 6.3 0 0 1 12 21m6-6.5V13l-2.25 2.25L18 17.5V16a2.5 2.5 0 0 1 2.24 3.62l1.09 1.09A4 4 0 0 0 18 14.5m0 6.5a2.5 2.5 0 0 1-2.24-3.62l-1.09-1.09A4 4 0 0 0 18 22.5V24l2.25-2.25L18 19.5Z"></svg:path>`,
})
export class MdiShieldSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
