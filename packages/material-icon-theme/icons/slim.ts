import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSlimIcon],svg[material-icon-theme-slim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f57f17" d="M23 2H9a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7V9a7 7 0 0 0-7-7m-5 14l-4-6v6H6a10 10 0 0 1 20 0Z"></svg:path>`,
})
export class MaterialIconThemeSlimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
