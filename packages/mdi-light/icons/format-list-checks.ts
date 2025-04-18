import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatListChecksIcon],svg[mdi-light-format-list-checks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v1H7v-1zm0-6v1H7v-1zm0-6v1H7V6zM2 5h3v3H2zm1 1v1h1V6zm-1 5h3v3H2zm1 1v1h1v-1zm-1 5h3v3H2zm1 1v1h1v-1z"></svg:path>`,
})
export class MdiLightFormatListChecksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
