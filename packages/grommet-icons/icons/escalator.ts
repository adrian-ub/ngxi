import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsEscalatorIcon],svg[grommet-icons-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M22 9a2 2 0 0 0-1.998-2H16L6 17H4c-1.105 0-2 .888-2 2h0a2 2 0 0 0 1.998 2H8l10-10h2c1.105 0 2-.888 2-2zM7 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6v-2.505c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V14zm5-11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6V7.495c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V9z"></svg:path>`,
})
export class GrommetIconsEscalatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
