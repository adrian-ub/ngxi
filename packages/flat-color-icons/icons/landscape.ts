import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLandscapeIcon],svg[flat-color-icons-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FF9800"><svg:path d="m40.997 6.065l7 7l-7 6.999l-7-7z"></svg:path><svg:path d="M36 8h10v10H36z"></svg:path></svg:g><svg:circle cx="41" cy="13" r="3" fill="#FFEB3B"></svg:circle><svg:path fill="#2E7D32" d="M16.5 18L0 42h33z"></svg:path><svg:path fill="#4CAF50" d="M33.6 24L19.2 42H48z"></svg:path>`,
})
export class FlatColorIconsLandscapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
