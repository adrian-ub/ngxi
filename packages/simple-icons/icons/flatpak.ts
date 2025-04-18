import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFlatpakIcon],svg[simple-icons-flatpak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0c-.556 0-1.111.144-1.61.432l-7.603 4.39a3.22 3.22 0 0 0-1.61 2.788v8.78c0 1.151.612 2.212 1.61 2.788l7.603 4.39a3.22 3.22 0 0 0 3.22 0l7.603-4.39a3.22 3.22 0 0 0 1.61-2.788V7.61a3.22 3.22 0 0 0-1.61-2.788L13.61.432A3.2 3.2 0 0 0 12 0m0 2.358c.15 0 .299.039.431.115l7.604 4.39c.132.077.24.187.315.316L12 12v9.642a.86.86 0 0 1-.431-.116l-7.604-4.39a.87.87 0 0 1-.431-.746V7.61c0-.153.041-.302.116-.43L12 12Z"></svg:path>`,
})
export class SimpleIconsFlatpakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
