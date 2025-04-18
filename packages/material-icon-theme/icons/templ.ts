import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTemplIcon],svg[material-icon-theme-templ-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffd54f" d="M8.125 24.313L1 16l7.125-8.313l3 2.625L6.25 16l4.875 5.688ZM24 7.687L31.125 16L24 24.313l-3-2.625L25.875 16L21 10.312ZM16 4l-4 24h4l4-24z"></svg:path>`,
})
export class MaterialIconThemeTemplIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
