import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBloggerIcon],svg[whh-blogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H320q-87 0-160.5-43T43 864.5T0 704V320q0-87 43-160.5T159.5 43T320 0h192q87 0 160.5 43T789 159.5T832 320q0 26 18.5 45t45.5 19h64q26 0 45 18.5t19 45.5v256q0 87-43 160.5T864.5 981T704 1024M512 256H320q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h192q27 0 45.5-19t18.5-45.5t-19-45t-45-18.5m192 384H320q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h384q26 0 45-19t19-45.5t-19-45t-45-18.5"></svg:path>`,
})
export class WhhBloggerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
