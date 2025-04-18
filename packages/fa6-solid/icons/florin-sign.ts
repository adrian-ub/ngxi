import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFlorinSignIcon],svg[fa6-solid-florin-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M314.7 32c-38.8 0-73.7 23.3-88.6 59.1L170.7 224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h80L98.9 396.3c-5 11.9-16.6 19.7-29.5 19.7H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h37.3c38.8 0 73.7-23.3 88.6-59.1L213.3 288H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80l45.1-108.3c5-11.9 16.6-19.7 29.5-19.7H352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidFlorinSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
