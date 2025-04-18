import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKwgtProIcon],svg[arcticons-kwgt-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="5.978" height="28.394" x="13.933" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.196" ry="1.196"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.469 4.5h-.598a4.78 4.78 0 0 0-4.782 4.782v3.173a.6.6 0 0 1-.196.442l-5.407 4.915a1.196 1.196 0 0 0 0 1.77l5.407 4.915a.6.6 0 0 1 .196.442v3.173a4.78 4.78 0 0 0 4.782 4.782h.598c.33 0 .598-.267.598-.597v-9.518c0-.317-.126-.621-.35-.845l-2.814-2.814a.6.6 0 0 1 0-.846l2.813-2.813c.225-.225.35-.529.35-.846V5.098a.6.6 0 0 0-.597-.598"></svg:path><svg:circle cx="16.922" cy="40.511" r="2.989" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.911 40.511h14.156V43.5m-4.817-1.02v-1.969"></svg:path>`,
})
export class ArcticonsKwgtProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
