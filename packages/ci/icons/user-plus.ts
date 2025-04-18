import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciUserPlusIcon],svg[ci-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19H2a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0Zm15-3h-2v-3h-3v-2h3V8h2v3h3v2h-3v3ZM8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 2 2.09v.4V8a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class CiUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
