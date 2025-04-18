import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons5postIcon],svg[arcticons-5post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 30.9a17.898 17.898 0 0 1-31 0m8.923-3.821c1.483 1.196 2.92 1.743 6.515 1.743h.618c3.325 0 6.02-2.594 6.02-5.795h0c0-3.2-2.695-5.795-6.02-5.795h-7.133v-9.08h13.153"></svg:path>`,
})
export class Arcticons5postIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
