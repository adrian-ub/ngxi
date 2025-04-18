import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsLockClosedSolidIcon],svg[heroicons-lock-closed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25m3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsLockClosedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
