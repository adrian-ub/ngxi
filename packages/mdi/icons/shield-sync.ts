import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldSyncIcon],svg[mdi-shield-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12a6.4 6.4 0 0 1 2.87.67A12 12 0 0 0 21 11V5l-9-4l-9 4v6c0 5.55 3.84 10.74 9 12c.35-.09.7-.2 1-.32a6.42 6.42 0 0 1-1.5-4.18A6.5 6.5 0 0 1 18 12m0 2.5V13l-2.25 2.25L18 17.5V16a2.5 2.5 0 0 1 2.24 3.62l1.09 1.09A4 4 0 0 0 18 14.5m0 6.5a2.5 2.5 0 0 1-2.24-3.62l-1.09-1.09A4 4 0 0 0 18 22.5V24l2.25-2.25L18 19.5Z"></svg:path>`,
})
export class MdiShieldSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
