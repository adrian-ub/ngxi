import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCubesIcon],svg[grommet-icons-cubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m6.5 10.5l5.5 3l5.5-3v-6l-5.5-3l-5.5 3zm0-6l5.5 3l5.5-3m-5.5 3v6zm-11 12l5.5 3l5.5-3v-6l-5.5-3l-5.5 3zm0-6l5.5 3l5.5-3m-5.5 3v6zm5.5 3l5.5 3l5.5-3v-6l-5.5-3l-5.5 3zm0-6l5.5 3l5.5-3m-5.5 3v6z"></svg:path>`,
})
export class GrommetIconsCubesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
