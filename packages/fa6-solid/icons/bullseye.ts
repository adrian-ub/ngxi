import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBullseyeIcon],svg[fa6-solid-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 256a192 192 0 1 0-384 0a192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256 80a80 80 0 1 0 0-160a80 80 0 1 0 0 160m0-224a144 144 0 1 1 0 288a144 144 0 1 1 0-288m-32 144a32 32 0 1 1 64 0a32 32 0 1 1-64 0"></svg:path>`,
})
export class Fa6SolidBullseyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
