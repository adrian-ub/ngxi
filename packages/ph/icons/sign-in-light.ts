import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSignInLightIcon],svg[ph-sign-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m140.24 132.24l-40 40a6 6 0 0 1-8.48-8.48L121.51 134H24a6 6 0 0 1 0-12h97.51L91.76 92.24a6 6 0 0 1 8.48-8.48l40 40a6 6 0 0 1 0 8.48M200 34h-64a6 6 0 0 0 0 12h58v164h-58a6 6 0 0 0 0 12h64a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhSignInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
