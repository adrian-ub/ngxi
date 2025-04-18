import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoHomeIcon],svg[fontisto-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 12h-3v12h-6v-9H9v9H3V12H0L12 0z"></svg:path>`,
})
export class FontistoHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
