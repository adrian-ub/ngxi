import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYouHaveMailIcon],svg[arcticons-you-have-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.628 16.173L5.5 41.79h37V16.173H21.154v7.116h-4.981V11.904H24V6.212H11.192v9.961z"></svg:path>`,
})
export class ArcticonsYouHaveMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
