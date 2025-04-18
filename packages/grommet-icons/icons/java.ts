import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsJavaIcon],svg[grommet-icons-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 18V9h16v9c0 4-2 5-8 5s-8-1-8-5Zm16-9v3a3 3 0 1 0 3-3zm-4-3V2M5 6V4m4 2V0"></svg:path>`,
})
export class GrommetIconsJavaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
