import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnimeBoyaIcon],svg[arcticons-anime-boya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.73 34.154H43.5l-7.916-10.179L43.5 13.846H23.73zm-1.666-19.985c-3.023 7.172-3.13 19.498-10.17 19.703c-5.782.169-7.434-6.17-7.393-9.823c-.023-6.742 4.876-9.995 7.394-10.178c6.257-.454 6.92 6.32 7.38 10.319c.835 7.258.515 9.919 4.455 9.96"></svg:path>`,
})
export class ArcticonsAnimeBoyaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
