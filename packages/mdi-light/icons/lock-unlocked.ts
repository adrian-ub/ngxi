import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightLockUnlockedIcon],svg[mdi-light-lock-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".886" d="M16 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h8V6.5A3.5 3.5 0 0 0 8.035 6H7.027A4.5 4.5 0 0 1 16 6.5V8ZM7 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7Zm4.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm0-1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z"></svg:path>`,
})
export class MdiLightLockUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
