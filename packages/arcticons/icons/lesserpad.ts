import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLesserpadIcon],svg[arcticons-lesserpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.521 12.7H29.07m0 7.53H11.521m0 7.54h9.749m-9.749 7.53h5.849m4.93-2.46v2.46h2.4a1 1 0 0 0 .68-.29L40.89 19.5l-2.85-2.85l-15.51 15.51a1 1 0 0 0-.23.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.08 17.29a.75.75 0 0 0 0-1.06h0l-1.73-1.77a.75.75 0 0 0-1.06 0l-2.25 2.2l2.85 2.85zm-7.38 7.4V39.5c0 2.21-1.79 4-4 4h-23c-2.21 0-4-1.79-4-4v-31c0-2.21 1.79-4 4-4h23c2.21 0 4 1.79 4 4v10.49"></svg:path>`,
})
export class ArcticonsLesserpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
