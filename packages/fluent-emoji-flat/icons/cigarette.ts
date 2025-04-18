import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCigaretteIcon],svg[fluent-emoji-flat-cigarette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F4F4F4" d="M5.047 22h13.967L20 25l-.986 3H5.047L4 25z"></svg:path><svg:path fill="#D3D3D3" d="M4 26h17l-2 4H4z"></svg:path><svg:path fill="#E19747" d="m19 26l5.5-2l5.5 2v2.5a1.5 1.5 0 0 1-1.5 1.5H19z"></svg:path><svg:path fill="#F9C23C" d="M19 22h9.5a1.5 1.5 0 0 1 1.5 1.5V26H19z"></svg:path><svg:path fill="#FEEFC2" d="M21.578 23.99a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m2.17 2.06a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.66-1.56a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5 3.61a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-4.83.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m6.99-2.55a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path fill="#636363" d="M2 23.5A1.5 1.5 0 0 1 3.5 22H6l-.75 1a1.67 1.67 0 0 0 0 2a1.67 1.67 0 0 1 0 2a1.67 1.67 0 0 0 0 2L6 30H3.5A1.5 1.5 0 0 1 2 28.5z"></svg:path><svg:path fill="#9B9B9B" d="M11.475 7.256c-.392.717-.818 1.498-.556 3.197c.055.306 0 .547-.174.547c-.055 0-.15-.018-.285-.158c-2.272-2.493-1.435-3.805-.538-5.211c.453-.711.922-1.447 1.012-2.371c0-.14.103-.26.23-.26c.102 0 .165.083.245.26c.982 2.316.55 3.108.066 3.996M6.95 14.447c-.784 1.257-1.636 2.622-1.113 5.596c.11.535 0 .957-.347.957c-.111 0-.3-.032-.57-.276c-4.544-4.363-2.87-6.659-1.077-9.12c.907-1.245 1.845-2.532 2.026-4.15c0-.243.205-.454.458-.454c.205 0 .332.146.49.454c1.966 4.054 1.101 5.44.132 6.993"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCigaretteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
