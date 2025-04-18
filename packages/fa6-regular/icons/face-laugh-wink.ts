import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularFaceLaughWinkIcon],svg[fa6-regular-face-laugh-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256a208 208 0 1 0-416 0a208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9h212.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1M144.4 192a32 32 0 1 1 64 0a32 32 0 1 1-64 0m165.8 21.7c-7.6 8.1-20.2 8.5-28.3.9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7"></svg:path>`,
})
export class Fa6RegularFaceLaughWinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
