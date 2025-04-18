import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPlayRewindFillIcon],svg[si-play-rewind-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 5a1 1 0 0 0-1.573-.82l-10 7a1 1 0 0 0 0 1.64l10 7A1 1 0 0 0 14 19v-2.98l5.427 3.8A1 1 0 0 0 21 19V5a1 1 0 0 0-1.573-.82L14 7.98zm-2 4.38V6.92L4.744 12L12 17.08v-2.46l-2.573-1.8a1 1 0 0 1 0-1.64z" clip-rule="evenodd"></svg:path>`,
})
export class SiPlayRewindFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
