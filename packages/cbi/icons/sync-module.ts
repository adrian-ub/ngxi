import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiSyncModuleIcon],svg[cbi-sync-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.418 2H6.582A4.58 4.58 0 0 0 2 6.582v10.836A4.58 4.58 0 0 0 6.582 22h10.836A4.58 4.58 0 0 0 22 17.418V6.582A4.58 4.58 0 0 0 17.418 2m1.693 7.458a.895.895 0 1 1 .895-.895a.894.894 0 0 1-.895.895m0-2.5a.9.9 0 1 1 .895-.895a.895.895 0 0 1-.895.894z" class="cls-1"></svg:path>`,
})
export class CbiSyncModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
