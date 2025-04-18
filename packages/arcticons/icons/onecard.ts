import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnecardIcon],svg[arcticons-onecard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 32h39"></svg:path><svg:rect width="7.614" height="10.088" x="8.697" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.807" ry="3.807"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.783 26.088v-6.281A3.807 3.807 0 0 0 23.976 16h0a3.807 3.807 0 0 0-3.807 3.807m0 6.281V16m18.635 8.167a3.8 3.8 0 0 1-3.308 1.921h0a3.807 3.807 0 0 1-3.807-3.807v-2.474A3.807 3.807 0 0 1 35.496 16h0a3.807 3.807 0 0 1 3.807 3.807v1.237h-7.614M12.504 18.39v5.309m-1.12-4.586h.493a.627.627 0 0 0 .627-.627"></svg:path><svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsOnecardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
