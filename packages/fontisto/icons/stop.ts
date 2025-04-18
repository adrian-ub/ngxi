import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoStopIcon],svg[fontisto-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.334 24H2.668a2.67 2.67 0 0 1-2.667-2.667V2.666A2.67 2.67 0 0 1 2.668 0h18.667A2.67 2.67 0 0 1 24 2.666v18.667A2.67 2.67 0 0 1 21.333 24z"></svg:path>`,
})
export class FontistoStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
