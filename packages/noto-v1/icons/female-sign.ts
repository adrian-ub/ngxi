import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1FemaleSignIcon],svg[noto-v1-female-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fcc21b"><svg:path d="M71.926 83.696v40.31h-16.86v-40.31z"></svg:path><svg:path d="M83.65 111.532H43.34v-16.86h40.31zM63.5 4.68c-22.57 0-40.87 18.3-40.87 40.87s18.3 40.87 40.87 40.87s40.87-18.3 40.87-40.87S86.07 4.68 63.5 4.68m0 64.89c-13.26 0-24.02-10.75-24.02-24.02c0-13.26 10.75-24.02 24.02-24.02s24.02 10.75 24.02 24.02c0 13.26-10.76 24.02-24.02 24.02"></svg:path></svg:g>`,
})
export class NotoV1FemaleSignIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
