import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsFontAwesomeFlagIcon],svg[fa-brands-font-awesome-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 48v336c-63 23-82 32-119 32c-63 0-87-32-150-32c-20 0-36 4-51 8v-64c15-4 31-8 51-8c63 0 87 32 150 32c20 0 35-3 55-9V135c-20 6-35 9-55 9c-63 0-87-32-150-32c-51 0-75 21-115 29v307a31.6 31.6 0 0 1-32 32a31.6 31.6 0 0 1-32-32V64a31.6 31.6 0 0 1 32-32a31.6 31.6 0 0 1 32 32v13c40-8 64-29 115-29c63 0 87 32 150 32c37 0 56-9 119-32"></svg:path>`,
})
export class FaBrandsFontAwesomeFlagIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
