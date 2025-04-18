import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epFemaleIcon],svg[ep-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640a256 256 0 1 0 0-512a256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640a320 320 0 0 1 0 640"></svg:path><svg:path fill="currentColor" d="M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32"></svg:path><svg:path fill="currentColor" d="M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32"></svg:path>`,
})
export class EpFemaleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
