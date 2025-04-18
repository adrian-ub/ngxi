import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeJsrIcon],svg[material-icon-theme-jsr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fdd835" d="M2 7h1v2h1V5h1v5H2m4-5h4v1H7v1.5h3V11H6v-1h3V8.5H6M11 6h3v2.5h-1V7h-1v4h-1"></svg:path>`,
})
export class MaterialIconThemeJsrIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
