import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightHelpIcon],svg[mdi-light-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-2h1v2zm0-4.5c0-4.5 5-6 5-9C16 6 14 4 11.5 4C9.18 4 7.28 5.75 7.03 8H6c.28-2.8 2.63-5 5.5-5A5.5 5.5 0 0 1 17 8.5c0 3.5-5 4.5-5 9v.5h-1z"></svg:path>`,
})
export class MdiLightHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
