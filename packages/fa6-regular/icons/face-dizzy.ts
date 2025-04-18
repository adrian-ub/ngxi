import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularFaceDizzyIcon],svg[fa6-regular-face-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256a208 208 0 1 0-416 0a208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256 32a64 64 0 1 1 0 128a64 64 0 1 1 0-128M103 135c9.4-9.4 24.6-9.4 33.9 0l23 23l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23l-23-23c-9.4-9.4-9.4-24.6 0-33.9m192 0c9.4-9.4 24.6-9.4 33.9 0l23 23l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23l-23-23c-9.4-9.4-9.4-24.6 0-33.9"></svg:path>`,
})
export class Fa6RegularFaceDizzyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
