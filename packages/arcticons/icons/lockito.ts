import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLockitoIcon],svg[arcticons-lockito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.107 22.018l5.286-2.643l5.285 2.643v15.857l5.286 2.643l7.928-3.965"></svg:path><svg:circle cx="38.535" cy="35.232" r=".991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.51 19.375a3.964 3.964 0 0 0-3.325 6.083l3.35 7.131l3.378-7.175a3.964 3.964 0 0 0-3.404-6.039"></svg:path><svg:circle cx="9.464" cy="23.339" r=".991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.438 7.483a3.964 3.964 0 0 0-3.324 6.083l3.35 7.13l3.379-7.174a3.964 3.964 0 0 0-3.405-6.04"></svg:path>`,
})
export class ArcticonsLockitoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
