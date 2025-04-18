import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoDiggIcon],svg[carbon-logo-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.48 7.6v3.92H2V21h7.28V7.6zm0 11.2H4.8v-5h1.68zm3.92-7.28h2.8v9.52h-2.8zm0-3.92h2.8v2.8h-2.8zm3.92 3.92V21h4.48v1.12h-4.48v2.28h7.28V11.52zm4.48 7.28h-1.68v-5h1.68zm3.92-7.28V21h4.48v1.12h-4.48v2.28H30V11.52zm4.48 7.28h-1.68v-5h1.68z"></svg:path>`,
})
export class CarbonLogoDiggIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
