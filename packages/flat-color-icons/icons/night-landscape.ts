import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsNightLandscapeIcon],svg[flat-color-icons-night-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#673AB7" d="M16.5 18L0 42h33z"></svg:path><svg:path fill="#9575CD" d="M33.6 24L19.2 42H48z"></svg:path><svg:path fill="#40C4FF" d="M42.9 6.3C43.6 7.4 44 8.6 44 10c0 3.9-3.1 7-7 7c-.7 0-1.3-.1-1.9-.3c1.2 2 3.4 3.3 5.9 3.3c3.9 0 7-3.1 7-7c0-3.2-2.1-5.9-5.1-6.7"></svg:path>`,
})
export class FlatColorIconsNightLandscapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
